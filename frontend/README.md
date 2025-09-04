# Frontend React App

Este proyecto es una aplicación frontend en React que muestra los datos de las personas obtenidos del backend Node.js.

## Características
- Visualización de la lista de personas
- Consumo de API REST del backend

## Requisitos
- Node.js y npm

## Instalación y ejecución

1. Instala las dependencias:
   ```sh
   cd frontend
   npm install
   ```

2. Inicia la aplicación:
   ```sh
   npm start
   ```

3. Accede a la app en tu navegador:
   - http://localhost:3000 (o el puerto que indique la consola)

## Estructura del proyecto
```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   └── index.js
├── package.json
```

## Notas
- La app espera que el backend esté corriendo en `http://localhost:3000` y exponga el endpoint `/personas`.

## Licencia
MIT
