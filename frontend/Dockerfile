# Utiliza una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json ./
COPY package-lock.json ./

# Instala las dependencias
RUN npm install --production=false

# Copia el resto de la aplicación
COPY . .

# Expone el puerto de la app
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
