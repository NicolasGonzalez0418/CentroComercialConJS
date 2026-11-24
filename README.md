# CentroComercialConJS

Aplicación web desarrollada con **JavaScript** que permite visualizar y simular la operación de un centro comercial, incluyendo sus pisos, locales comerciales, productos y procesos de compra.

El proyecto utiliza el **caché del navegador** como mecanismo para gestionar y conservar la información durante el funcionamiento de la aplicación, sin depender de una base de datos tradicional.

## Funcionalidades

### Visualización del centro comercial
- Interfaz general del centro comercial.
- Visualización de los diferentes pisos.
- Navegación entre los locales comerciales.
- Consulta de los productos disponibles en cada local.

### Panel de visualización
- Panel general con información del centro comercial.
- Visualización individual de cada local.
- Consulta de productos y su información.
- Organización de la información por pisos y establecimientos.

### Sistema de compras
- Carrito de compras.
- Selección de productos de diferentes locales.
- Gestión de los productos seleccionados.
- Cálculo de los valores de compra.

### Facturación
- Generación de facturas a partir de las compras realizadas.
- Visualización del detalle de cada factura.
- Consulta del historial de facturas generadas.

### Gestión de información
- Manejo de información mediante el caché del navegador.
- Conservación de información para el funcionamiento de la aplicación.
- Gestión de los datos de locales, productos y compras desde JavaScript.

## Tecnologías utilizadas

- **HTML5:** estructura de la aplicación.
- **CSS3:** diseño e interfaces.
- **JavaScript:** lógica, navegación, gestión de datos y funcionalidades del sistema.
- **Browser Cache:** mecanismo de almacenamiento y gestión de información en el navegador.

## Estructura general

El proyecto se organiza en diferentes módulos para facilitar el desarrollo y mantenimiento de sus funcionalidades.

## Base de datos

La información del centro comercial (pisos, locales y productos) está en MySQL.
El servidor `server.js` la consulta y la entrega a la página con la misma forma del
arreglo `CentroComercial`, así que el resto de la lógica de `script.js` no cambia.

```
MySQL (bd/centro_comercial.sql)  ->  server.js (Node + Express)  ->  script.js (fetch)
```

- `bd/centro_comercial.sql`: crea la base `centro_comercial` con las tablas `pisos`, `locales` y `productos` y sus datos.
- `bd/conexion.js`: clase `Conexion` que se conecta a MySQL y ejecuta las consultas.
- `server.js`: usa la clase `Conexion` y expone `GET http://localhost:3000/api/centro-comercial`.

## Ejecución del proyecto

Requisitos: [Node.js](https://nodejs.org) (versión LTS) y MySQL.

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/NicolasGonzalez0418/CentroComercialConJS.git
   cd CentroComercialConJS
   ```

2. Crear la base de datos: abrir `bd/centro_comercial.sql` en MySQL Workbench y ejecutarlo completo (o `mysql -u root -p < bd/centro_comercial.sql`).

3. Si MySQL tiene contraseña, ponerla en `bd/conexion.js` (`password: process.env.DB_PASSWORD || ""`).

4. Instalar dependencias y encender el servidor (dejar la terminal abierta):

   ```bash
   npm install
   node server.js
   ```

5. Abrir `http://localhost:3000` en el navegador.
   También funciona con Live Server, siempre que `node server.js` esté corriendo.

## Objetivo del proyecto

Desarrollar una simulación interactiva de un centro comercial utilizando JavaScript, integrando diferentes funcionalidades de navegación, visualización de establecimientos, gestión de productos, compras y facturación.

El proyecto busca aplicar conceptos de programación web, manipulación del DOM, gestión de información y desarrollo de interfaces interactivas.

---

**Desarrollado como proyecto académico y práctico de programación web.**
