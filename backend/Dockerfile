# Usar la imagen base de Node.js
FROM node:18-alpine
# Crear el directorio de trabajo
WORKDIR /usr/src/app
# Copiar los archivos necesarios
COPY package*.json ./
# Instalar las dependencias
RUN npm install
# Copiar el resto del código fuente
COPY . .
# Exponer el puerto de la aplicación
EXPOSE 3000
# Comando para iniciar la aplicación
CMD ["node", "app.js"]