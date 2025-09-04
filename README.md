# Node.js + MySQL Application

This project is a simple Node.js backend application using Express and MySQL, containerized with Docker and orchestrated using Docker Compose.

## Features
- REST API built with Express
- MySQL database integration
- Easy local development with Docker Compose

## Prerequisites
- Docker & Docker Compose

## Getting Started

1. **Clone the repository**
   ```sh
   git clone https://github.com/marcoviaweb/mi-app-nodejs-mysq.git
   cd mi-app-nodejs-mysq
   ```

2. **Configure environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   MYSQL_ROOT_PASSWORD=your_root_password
   MYSQL_USER=your_user
   MYSQL_PASSWORD=your_password
   MYSQL_DATABASE=your_database
   ```

3. **Start the application**
   ```sh
   docker-compose up --build
   ```

4. **Access the API**
   - Backend: http://localhost:3000
   - MySQL: localhost:3006 (default port mapped)

## Project Structure
```
mi-aplicacion-nodejs-mysql/
├── backend/
│   ├── app.js
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
```

## Useful Commands
- `docker-compose up --build` : Build and start all services
- `docker-compose down` : Stop and remove containers

## License
MIT
