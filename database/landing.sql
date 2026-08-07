CREATE DATABASE landing_page;

USE landing_page;

CREATE TABLE registros(

    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,

    correo VARCHAR(150) NOT NULL,

    objetivo VARCHAR(100) NOT NULL,

    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);