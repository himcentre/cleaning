# Используем официальный Node.js образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY bot/package*.json ./

# Устанавливаем зависимости
RUN npm install --omit=dev

# Копируем исходный код
COPY bot/ ./

# Создаем пользователя для безопасности
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Меняем владельца файлов
RUN chown -R nodejs:nodejs /app
USER nodejs

# Открываем порт (если нужен)
EXPOSE 3000

# Команда запуска
CMD ["npm", "start"]
