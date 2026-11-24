-- =====================================================================
--  Base de datos: centro_comercial (MySQL 8)
--  Solo contiene la información de la constante CentroComercial de script.js:
--
--    CentroComercial[piso]                          -> tabla pisos
--    ["Nike", [productos], "Nike.png"]              -> tabla locales
--    ["Air Max", 320000, 160, "Air_Max.jpg"]        -> tabla productos
--
--  - id_local = piso * 100 + numero_local (Nike = 203)
--  - numero_local y posicion guardan el orden, para que el arreglo
--    que arma el servidor quede en el mismo orden que el original.
--  - precio es INT (pesos sin decimales) para que en JS llegue como número.
-- =====================================================================

DROP DATABASE IF EXISTS centro_comercial;
CREATE DATABASE centro_comercial CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;
USE centro_comercial;

CREATE TABLE pisos (
    id_piso  INT PRIMARY KEY,                  -- 1, 2, 3
    nombre   VARCHAR(20) NOT NULL              -- 'Piso1', 'Piso2', 'Piso3'
);

CREATE TABLE locales (
    id_local      INT PRIMARY KEY,             -- piso*100 + numero_local
    id_piso       INT NOT NULL,
    numero_local  INT NOT NULL,                -- posición del local dentro del piso (1..5)
    nombre        VARCHAR(50)  NOT NULL,       -- también es el nombre de la carpeta en Img/PisoX/
    logo          VARCHAR(100) NOT NULL,
    CONSTRAINT fk_local_piso FOREIGN KEY (id_piso) REFERENCES pisos(id_piso),
    CONSTRAINT uq_local_piso UNIQUE (id_piso, numero_local)
);

CREATE TABLE productos (
    id_producto  INT AUTO_INCREMENT PRIMARY KEY,
    id_local     INT NOT NULL,
    posicion     INT NOT NULL,                 -- posición del producto dentro del local (1..5)
    nombre       VARCHAR(100) NOT NULL,
    precio       INT NOT NULL,
    stock        INT NOT NULL,
    imagen       VARCHAR(100) NOT NULL,
    CONSTRAINT fk_producto_local FOREIGN KEY (id_local) REFERENCES locales(id_local),
    CONSTRAINT uq_producto_posicion UNIQUE (id_local, posicion),
    CONSTRAINT ck_precio CHECK (precio >= 0),
    CONSTRAINT ck_stock  CHECK (stock >= 0)
);

-- =====================================================================
-- DATOS (copiados de la constante CentroComercial)
-- =====================================================================

INSERT INTO pisos (id_piso, nombre) VALUES
(1, 'Piso1'),
(2, 'Piso2'),
(3, 'Piso3');

INSERT INTO locales (id_local, id_piso, numero_local, nombre, logo) VALUES
(101, 1, 1, 'Dollarcity', 'Dollarcity.png'),
(102, 1, 2, 'Donde_Sam', 'Donde_Sam.png'),
(103, 1, 3, 'Drogueria', 'Drogueria.jpg'),
(104, 1, 4, 'Fress', 'Fress.png'),
(105, 1, 5, 'Pandora', 'Pandora.jpg'),
(201, 2, 1, 'Casa_Shic', 'Casa_Shic.jpg'),
(202, 2, 2, 'Estilo360', 'Estilo360.jpg'),
(203, 2, 3, 'Nike', 'Nike.png'),
(204, 2, 4, 'Shin', 'Shin.png'),
(205, 2, 5, 'WORLD', 'WORLD.svg'),
(301, 3, 1, 'GameZone', 'GameZone.jpg'),
(302, 3, 2, 'TechWorld', 'TechWorld.png'),
(303, 3, 3, 'FitLife', 'FitLife.jpg'),
(304, 3, 4, 'PetHouse', 'PetHouse.png'),
(305, 3, 5, 'Coffee_Lab', 'Coffee_Lab.jpg');

-- Piso 1 - Dollarcity (id_local 101)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(101, 1, 'Espatula', 10000, 5, 'Espatula.jpg'),
(101, 2, 'Organizador', 15000, 10, 'Organizador.jpg'),
(101, 3, 'Rallador', 8000, 3, 'Rallador.jpg'),
(101, 4, 'Simoniz', 12000, 12, 'Simoniz.jpg'),
(101, 5, 'Tante', 18000, 1, 'Tante.jpg');

-- Piso 1 - Donde_Sam (id_local 102)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(102, 1, 'Asus', 2800000, 10, 'Asus.jpg'),
(102, 2, 'Hp', 1500000, 2, 'Hp.jpg'),
(102, 3, 'Iphone 18', 1500000, 15, 'Iphone_18.jpg'),
(102, 4, 'Samsung', 1200000, 20, 'Samsung.jpg'),
(102, 5, 'Xiaomi', 1000000, 12, 'Xiaomi.jpg');

-- Piso 1 - Drogueria (id_local 103)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(103, 1, 'Acetaminofen', 8000, 200, 'Acetaminofen.jpg'),
(103, 2, 'Dolex', 5500, 80, 'Dolex.jpg'),
(103, 3, 'Ibuprofeno', 7000, 50, 'Ibuprofeno.jpg'),
(103, 4, 'Loratadina', 3800, 30, 'Loratadina.jpg'),
(103, 5, 'Naproxeno', 2300, 100, 'Naproxeno.jpg');

-- Piso 1 - Fress (id_local 104)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(104, 1, 'Artesanal', 3800, 32, 'Artesanal.jpg'),
(104, 2, 'Bocatto', 6700, 20, 'Bocatto.jpg'),
(104, 3, 'Bon Bon Bum', 4200, 15, 'Bon_Bon_Bum.jpg'),
(104, 4, 'Casero', 2800, 25, 'Casero.jpg'),
(104, 5, 'Kulfi', 4600, 10, 'Kulfi.png');

-- Piso 1 - Pandora (id_local 105)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(105, 1, 'Anillo', 2000000, 80, 'Anillo.jpg'),
(105, 2, 'Aretes', 800000, 400, 'Aretes.jpg'),
(105, 3, 'Brazalete', 450000, 25, 'Brazalete.jpg'),
(105, 4, 'Charm', 180000, 1000, 'Charm.png'),
(105, 5, 'Collar', 2350000, 400, 'Collar.jpg');

-- Piso 2 - Casa_Shic (id_local 201)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(201, 1, 'Traje azul', 1200000, 30, 'Traje_azul.jpg'),
(201, 2, 'Traje negro', 1200000, 18, 'Traje_negro.jpg'),
(201, 3, 'Vestido rosa palido', 1200000, 20, 'Vestido_rosa_palido.jpg'),
(201, 4, 'Vestido verde', 1200000, 25, 'Vestido_verde.jpg'),
(201, 5, 'Vestido vinotinto', 1200000, 40, 'Vestido_vinotinto.jpg');

-- Piso 2 - Estilo360 (id_local 202)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(202, 1, 'Buso', 110000, 60, 'Buso.jpg'),
(202, 2, 'Camisa', 40000, 80, 'Camisa.jpg'),
(202, 3, 'Camiseta', 35000, 80, 'Camiseta.jpg'),
(202, 4, 'Jean', 140000, 32, 'Jean.jpg'),
(202, 5, 'Pantalon', 110000, 50, 'Pantalon.jpg');

-- Piso 2 - Nike (id_local 203)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(203, 1, 'Air Max', 320000, 160, 'Air_Max.jpg'),
(203, 2, 'Cosmic', 210000, 80, 'Cosmic.jpg'),
(203, 3, 'Dunk Low', 110000, 32, 'Dunk_Low.jpg'),
(203, 4, 'Force', 300000, 100, 'Force.jpg'),
(203, 5, 'Metcon', 200000, 43, 'Metcon.jpg');

-- Piso 2 - Shin (id_local 204)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(204, 1, 'Camiseta', 110000, 60, 'Camiseta.jpg'),
(204, 2, 'Demon', 40000, 80, 'Demon.jpg'),
(204, 3, 'Manga', 80000, 800, 'Manga.jpg'),
(204, 4, 'Nezuko', 180000, 320, 'Nezuko.jpg'),
(204, 5, 'One Piece', 110000, 20, 'One_Piece.jpg');

-- Piso 2 - WORLD (id_local 205)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(205, 1, 'christian louboutin', 12000000, 38, 'christian_louboutin.jpg'),
(205, 2, 'Gucci hombre', 8000000, 20, 'Gucci_hombre.jpg'),
(205, 3, 'Gucci mujer', 8000000, 20, 'Gucci_mujer.jpg'),
(205, 4, 'Valentino hombre', 10000000, 10, 'Valentino_hombre.jpg'),
(205, 5, 'YSL', 10000000, 19, 'YSL.jpg');

-- Piso 3 - GameZone (id_local 301)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(301, 1, 'PlayStation 5', 2800000, 15, 'PlayStation_5.jpg'),
(301, 2, 'Xbox Series X', 2500000, 12, 'Xbox_Series_X.png'),
(301, 3, 'Nintendo Switch', 1600000, 20, 'Nintendo_Switch.jpg'),
(301, 4, 'Control PS5', 320000, 35, 'Control_PS5.jpg'),
(301, 5, 'Audifonos Gamer', 180000, 40, 'Audifonos_Gamer.jpg');

-- Piso 3 - TechWorld (id_local 302)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(302, 1, 'MacBook Air', 5200000, 8, 'MacBook_Air.jpg'),
(302, 2, 'iPad', 2400000, 15, 'iPad.jpg'),
(302, 3, 'Apple Watch', 1500000, 18, 'Apple_Watch.jpg'),
(302, 4, 'Teclado Mecanico', 250000, 30, 'Teclado_Mecanico.jpg'),
(302, 5, 'Mouse Gamer', 120000, 45, 'Mouse_Gamer.jpg');

-- Piso 3 - FitLife (id_local 303)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(303, 1, 'Mancuernas', 120000, 40, 'Mancuernas.jpg'),
(303, 2, 'Barra Olimpica', 350000, 12, 'Barra_Olimpica.png'),
(303, 3, 'Caminadora', 1800000, 5, 'Caminadora.jpg'),
(303, 4, 'Bicicleta_Estatica', 950000, 8, 'Bicicleta_Estatica.jpg'),
(303, 5, 'Colchoneta', 65000, 50, 'Colchoneta.jpg');

-- Piso 3 - PetHouse (id_local 304)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(304, 1, 'Comida para Perros', 85000, 60, 'Comida_Perros.jpg'),
(304, 2, 'Comida para Gatos', 75000, 55, 'Comida_Gatos.jpg'),
(304, 3, 'Cama para Mascotas', 110000, 25, 'Cama_Mascotas.jpg'),
(304, 4, 'Correa', 35000, 80, 'Correa.jpg'),
(304, 5, 'Juguete de Mascotas', 22000, 100, 'Juguete_Mascotas.jpg');

-- Piso 3 - Coffee_Lab (id_local 305)
INSERT INTO productos (id_local, posicion, nombre, precio, stock, imagen) VALUES
(305, 1, 'Cafe Colombiano', 28000, 100, 'Cafe_Colombiano.jpg'),
(305, 2, 'Maquina de Espresso', 850000, 10, 'Maquina_Espresso.jpg'),
(305, 3, 'Molinillo de Cafe', 180000, 18, 'Molinillo_Cafe.jpg'),
(305, 4, 'Termo', 65000, 45, 'Termo.jpg'),
(305, 5, 'Prensa Francesa', 95000, 25, 'Prensa_Francesa.jpg');

-- =====================================================================
-- Consulta que usa server.js para reconstruir el arreglo
-- =====================================================================
-- SELECT p.id_piso, p.nombre AS piso, l.numero_local, l.nombre AS local, l.logo,
--        pr.posicion, pr.nombre AS producto, pr.precio, pr.stock, pr.imagen
-- FROM pisos p
-- JOIN locales l        ON l.id_piso   = p.id_piso
-- LEFT JOIN productos pr ON pr.id_local = l.id_local
-- ORDER BY p.id_piso, l.numero_local, pr.posicion;
