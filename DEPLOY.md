# Деплой LLM-tech сайта

## Быстрый деплой

```bash
# Скачиваем проект
git clone https://github.com/NeuroWorkers/website-landing.git
cd website-landing

# Запускаем автоматический деплой
sudo ./deploy.sh llmtech.ru 5000
```

## Ручной деплой

### 1. Подготовка сервера

```bash
# Обновляем систему
apt update && apt upgrade -y

# Устанавливаем Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Устанавливаем nginx
apt install -y nginx

# Устанавливаем PM2
npm install -g pm2
```

### 2. Подготовка проекта

```bash
# Переходим в директорию проекта
cd /path/to/website-landing

# Устанавливаем зависимости
npm install

# Собираем проект
npm run build
```

### 3. Настройка PM2

```bash
# Запускаем приложение
pm2 start ecosystem.config.js

# Сохраняем конфигурацию
pm2 save

# Настраиваем автозапуск
pm2 startup
```

### 4. Настройка nginx

```bash
# Копируем конфигурацию
cp nginx.conf /etc/nginx/sites-available/llmtech-website

# Включаем сайт
ln -s /etc/nginx/sites-available/llmtech-website /etc/nginx/sites-enabled/

# Удаляем дефолтный сайт
rm /etc/nginx/sites-enabled/default

# Тестируем конфигурацию
nginx -t

# Перезапускаем nginx
systemctl restart nginx
systemctl enable nginx
```

### 5. Настройка SSL (опционально)

```bash
# Устанавливаем certbot
apt install certbot python3-certbot-nginx

# Получаем SSL сертификат
certbot --nginx -d llmtech.ru -d www.llmtech.ru

# Автоматическое обновление сертификатов
crontab -e
# Добавляем строку:
# 0 12 * * * /usr/bin/certbot renew --quiet
```

## Управление приложением

### PM2 команды

```bash
# Статус приложения
pm2 status

# Логи
pm2 logs llmtech-website

# Перезапуск
pm2 restart llmtech-website

# Остановка
pm2 stop llmtech-website

# Удаление
pm2 delete llmtech-website
```

### Nginx команды

```bash
# Перезапуск nginx
systemctl restart nginx

# Статус nginx
systemctl status nginx

# Тест конфигурации
nginx -t

# Перезагрузка конфигурации
nginx -s reload
```

## Обновление проекта

```bash
# Переходим в директорию проекта
cd /var/www/llmtech-website

# Получаем последние изменения
git pull origin main

# Устанавливаем новые зависимости
npm install

# Собираем проект
npm run build

# Перезапускаем приложение
pm2 restart llmtech-website
```

## Мониторинг

### Логи

```bash
# Логи приложения
pm2 logs llmtech-website

# Логи nginx
tail -f /var/log/nginx/llmtech_access.log
tail -f /var/log/nginx/llmtech_error.log

# Системные логи
journalctl -u nginx
journalctl -u llmtech-website
```

### Метрики

```bash
# Мониторинг PM2
pm2 monit

# Использование ресурсов
htop
free -h
df -h
```

## Производительность

### Настройки nginx для высокой нагрузки

```nginx
# В /etc/nginx/nginx.conf
worker_processes auto;
worker_connections 1024;

# Кеширование
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m use_temp_path=off;

# В конфигурации сайта
location / {
    proxy_cache my_cache;
    proxy_cache_valid 200 302 10m;
    proxy_cache_valid 404 1m;
}
```

### Оптимизация PM2

```javascript
// В ecosystem.config.js
module.exports = {
  apps: [{
    name: 'llmtech-website',
    script: 'dist/index.js',
    instances: 'max', // Используем все CPU
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    }
  }]
};
```

## Безопасность

### Firewall

```bash
# Устанавливаем ufw
apt install ufw

# Настраиваем правила
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 'Nginx Full'

# Включаем firewall
ufw enable
```

### Fail2Ban

```bash
# Устанавливаем fail2ban
apt install fail2ban

# Настраиваем для nginx
cat > /etc/fail2ban/jail.local << EOF
[nginx-http-auth]
enabled = true

[nginx-noscript]
enabled = true

[nginx-badbots]
enabled = true

[nginx-noproxy]
enabled = true
EOF

# Перезапускаем fail2ban
systemctl restart fail2ban
```

## Резервное копирование

```bash
# Создаем скрипт бэкапа
cat > /root/backup.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/root/backups"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Бэкап файлов проекта
tar -czf $BACKUP_DIR/website_$DATE.tar.gz -C /var/www llmtech-website

# Бэкап конфигурации nginx
cp /etc/nginx/sites-available/llmtech-website $BACKUP_DIR/nginx_$DATE.conf

# Удаляем старые бэкапы (старше 7 дней)
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
find $BACKUP_DIR -name "*.conf" -mtime +7 -delete
EOF

chmod +x /root/backup.sh

# Добавляем в cron (ежедневно в 2:00)
crontab -e
# Добавляем строку:
# 0 2 * * * /root/backup.sh
```
