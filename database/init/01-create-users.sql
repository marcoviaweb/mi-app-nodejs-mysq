-- Crea la tabla de usuarios en la base indicada por MYSQL_DATABASE.
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

-- Inserta 20 usuarios de ejemplo solo si la tabla todavía está vacía.
INSERT INTO users (name, email)
SELECT datos.name, datos.email
FROM (
    SELECT 'Ana Pérez' AS name, 'ana.perez@example.com' AS email
    UNION ALL SELECT 'Luis García', 'luis.garcia@example.com'
    UNION ALL SELECT 'María Rodríguez', 'maria.rodriguez@example.com'
    UNION ALL SELECT 'Carlos López', 'carlos.lopez@example.com'
    UNION ALL SELECT 'Sofía Martínez', 'sofia.martinez@example.com'
    UNION ALL SELECT 'Jorge Fernández', 'jorge.fernandez@example.com'
    UNION ALL SELECT 'Valentina Gómez', 'valentina.gomez@example.com'
    UNION ALL SELECT 'Diego Sánchez', 'diego.sanchez@example.com'
    UNION ALL SELECT 'Camila Torres', 'camila.torres@example.com'
    UNION ALL SELECT 'Andrés Ramírez', 'andres.ramirez@example.com'
    UNION ALL SELECT 'Lucía Flores', 'lucia.flores@example.com'
    UNION ALL SELECT 'Mateo Vargas', 'mateo.vargas@example.com'
    UNION ALL SELECT 'Isabella Castro', 'isabella.castro@example.com'
    UNION ALL SELECT 'Gabriel Morales', 'gabriel.morales@example.com'
    UNION ALL SELECT 'Renata Jiménez', 'renata.jimenez@example.com'
    UNION ALL SELECT 'Pablo Herrera', 'pablo.herrera@example.com'
    UNION ALL SELECT 'Daniela Rojas', 'daniela.rojas@example.com'
    UNION ALL SELECT 'Nicolás Medina', 'nicolas.medina@example.com'
    UNION ALL SELECT 'Elena Silva', 'elena.silva@example.com'
    UNION ALL SELECT 'Tomás Ortega', 'tomas.ortega@example.com'
) AS datos
WHERE NOT EXISTS (SELECT 1 FROM users LIMIT 1);
