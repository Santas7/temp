#!/bin/bash

# Скрипт для деплоя LLM-tech сайта с nginx
# Использование: ./deploy.sh [domain] [port]

# Параметры
DOMAIN=${1:-"llmtech.ru"}
PORT=${2:-"5000"}
APP_NAME="llmtech-website"
APP_DIR="/var/www/$APP_NAME"
NGINX_CONFIG="/etc/nginx/sites-available/$APP_NAME"
NGINX_ENABLED="/etc/nginx/sites-enabled/$APP_NAME"
SERVICE_NAME="$APP_NAME.service"

echo "🚀 Начинаем деплой LLM-tech сайта..."
echo "📋 Домен: $DOMAIN"
echo "🔌 Порт: $PORT"

# Проверка что скрипт запущен от root
if [[ $EUID -ne 0 ]]; then
   echo "❌ Этот скрипт должен быть запущен от имени root (sudo)" 
   exit 1
fi

# Установка Node.js 20 (если не установлен)
if ! command -v node &> /dev/null; then
    echo "📦 Устанавливаем Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
fi

# Установка nginx (если не установлен)
if ! command -v nginx &> /dev/null; then
    echo "📦 Устанавливаем nginx..."
    apt-get update
    apt-get install -y nginx
fi

# Установка PM2 глобально (если не установлен)
if ! command -v pm2 &> /dev/null; then
    echo "📦 Устанавливаем PM2..."
    npm install -g pm2
fi

# Создаем директорию для приложения
echo "📁 Создаем директорию приложения..."
mkdir -p $APP_DIR
cp -r ./* $APP_DIR/
cd $APP_DIR

# Установка зависимостей и сборка
echo "📦 Устанавливаем зависимости..."
npm install

echo "🔨 Собираем приложение..."
npm run build

# Создаем файл ecosystem для PM2
echo "⚙️ Создаем конфигурацию PM2..."
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: '$APP_NAME',
    script: 'dist/index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: $PORT
    }
  }]
};
EOF

# Создаем конфигурацию nginx
echo "🌐 Создаем конфигурацию nginx..."
cat > $NGINX_CONFIG << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    # Сжатие
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Статические файлы
    location / {
        root $APP_DIR/dist/public;
        try_files \$uri \$uri/ @nodejs;
        
        # Кеширование статики
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
            add_header Vary Accept-Encoding;
        }
    }
    
    # Проксирование на Node.js для API
    location @nodejs {
        proxy_pass http://localhost:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
    
    # API роуты
    location /api/ {
        proxy_pass http://localhost:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
    
    # Безопасность
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
EOF

# Включаем сайт в nginx
echo "🔗 Включаем сайт в nginx..."
ln -sf $NGINX_CONFIG $NGINX_ENABLED

# Удаляем дефолтный сайт nginx (если существует)
if [ -f "/etc/nginx/sites-enabled/default" ]; then
    rm /etc/nginx/sites-enabled/default
fi

# Тестируем конфигурацию nginx
echo "🧪 Тестируем конфигурацию nginx..."
nginx -t

if [ $? -ne 0 ]; then
    echo "❌ Ошибка в конфигурации nginx!"
    exit 1
fi

# Запускаем приложение через PM2
echo "🚀 Запускаем приложение..."
pm2 delete $APP_NAME 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Перезапускаем nginx
echo "🔄 Перезапускаем nginx..."
systemctl restart nginx
systemctl enable nginx

# Создаем systemd сервис для автозапуска PM2
echo "⚙️ Создаем systemd сервис..."
cat > /etc/systemd/system/$SERVICE_NAME << EOF
[Unit]
Description=LLM-tech Website
After=network.target

[Service]
Type=forking
User=root
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
ExecStart=/usr/bin/pm2 start $APP_DIR/ecosystem.config.js --no-daemon
ExecReload=/usr/bin/pm2 reload all
ExecStop=/usr/bin/pm2 kill
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable $SERVICE_NAME
systemctl start $SERVICE_NAME

echo ""
echo "✅ Деплой завершен успешно!"
echo "🌐 Сайт доступен по адресу: http://$DOMAIN"
echo "🔧 Для управления приложением используйте PM2:"
echo "   pm2 status"
echo "   pm2 logs $APP_NAME"
echo "   pm2 restart $APP_NAME"
echo "   pm2 stop $APP_NAME"
echo ""
echo "📋 Логи nginx: /var/log/nginx/"
echo "📋 Конфигурация nginx: $NGINX_CONFIG"
echo "📋 Директория приложения: $APP_DIR"
echo ""
echo "🔒 Для настройки HTTPS с Let's Encrypt выполните:"
echo "   apt install certbot python3-certbot-nginx"
echo "   certbot --nginx -d $DOMAIN -d www.$DOMAIN"
