#!/bin/bash

# Скрипт для обновления LLM-tech сайта
# Использование: ./update.sh

APP_NAME="llmtech-website"
APP_DIR="/var/www/$APP_NAME"

echo "🔄 Обновляем LLM-tech сайт..."

# Проверка что скрипт запущен от root
if [[ $EUID -ne 0 ]]; then
   echo "❌ Этот скрипт должен быть запущен от имени root (sudo)" 
   exit 1
fi

# Проверка что директория приложения существует
if [ ! -d "$APP_DIR" ]; then
    echo "❌ Директория приложения $APP_DIR не найдена!"
    echo "💡 Сначала выполните деплой: ./deploy.sh"
    exit 1
fi

cd $APP_DIR

# Сохраняем текущую версию
echo "💾 Создаем резервную копию..."
cp -r . ../llmtech-website-backup-$(date +%Y%m%d_%H%M%S)

# Получаем последние изменения
echo "📥 Получаем последние изменения..."
git pull origin main

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при получении изменений из git!"
    exit 1
fi

# Устанавливаем/обновляем зависимости
echo "📦 Обновляем зависимости..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при установке зависимостей!"
    exit 1
fi

# Собираем проект
echo "🔨 Собираем проект..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при сборке проекта!"
    exit 1
fi

# Перезапускаем приложение
echo "🔄 Перезапускаем приложение..."
pm2 restart $APP_NAME

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при перезапуске приложения!"
    exit 1
fi

# Проверяем статус
echo "🔍 Проверяем статус приложения..."
pm2 status $APP_NAME

echo ""
echo "✅ Обновление завершено успешно!"
echo "🌐 Сайт обновлен и работает"
echo "📋 Для просмотра логов: pm2 logs $APP_NAME"
