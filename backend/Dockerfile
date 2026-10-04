# Usa Node.js 18 sobre Alpine como imagen base ligera.
FROM node:18-alpine

# Define el directorio de trabajo dentro del contenedor.
WORKDIR /usr/src/app

# Copia los manifiestos de dependencias para preparar su instalación.
COPY package*.json ./

# Instala las dependencias declaradas en package.json.
RUN npm install

# Copia el código fuente y los demás archivos del contexto de construcción.
COPY . .

# Documenta el puerto de la aplicación; Compose configura su publicación.
EXPOSE 3000

# Inicia la aplicación al arrancar el contenedor.
CMD ["node", "app.js"]
