const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configurar la conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL database');
});

// Endpoint básico
app.get('/', (req, res) => {
  res.send('Node.js + MySQL + Docker!');
});

// Endpoint para obtener datos de una tabla
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Database error');
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
