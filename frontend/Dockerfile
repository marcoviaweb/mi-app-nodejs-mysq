# Usa Nginx Alpine para servir los archivos estáticos del frontend.
FROM nginx:alpine

# Copia la página, los estilos y el código del cliente al directorio público de Nginx.
COPY index.html app.js styles.css /usr/share/nginx/html/

# Instala la configuración que redirige las llamadas API al backend de Compose.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Documenta el puerto HTTP del contenedor.
EXPOSE 80
