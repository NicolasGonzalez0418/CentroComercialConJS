// Servidor Node.js que lee MySQL y devuelve el arreglo CentroComercial
// con EXACTAMENTE la misma forma que tenía la constante en script.js:
//
// [ ['Piso1', [ ["Dollarcity", [ ["Espatula", 10000, 5, "Espatula.jpg"], ... ], "Dollarcity.png"], ... ]], ... ]

const express = require("express");
const Conexion = require("./bd/conexion");

// Conexión a MySQL (los datos de usuario y contraseña están en bd/conexion.js)
const conexion = new Conexion();

const app = express();
const PUERTO = 3000;

// Permite pedir los datos aunque la página se abra con Live Server (otro puerto)
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

// Endpoint que devuelve el arreglo CentroComercial
app.get("/api/centro-comercial", async function(req, res) {
    try {
        const filas = await conexion.consultar(`
            SELECT p.id_piso, p.nombre AS piso,
                   l.id_local, l.nombre AS local, l.logo,
                   pr.nombre AS producto, pr.precio, pr.stock, pr.imagen
            FROM pisos p
            JOIN locales l         ON l.id_piso   = p.id_piso
            LEFT JOIN productos pr ON pr.id_local = l.id_local
            ORDER BY p.id_piso, l.numero_local, pr.posicion`);

        // Se arma el arreglo anidado: pisos -> locales -> productos
        const CentroComercial = [];
        let pisoActual = null;
        let localActual = null;

        for (const fila of filas) {
            // Nuevo piso: ['Piso1', []]
            if (!pisoActual || pisoActual.id !== fila.id_piso) {
                pisoActual = { id: fila.id_piso, arreglo: [fila.piso, []] };
                CentroComercial.push(pisoActual.arreglo);
                localActual = null;
            }
            // Nuevo local: ["Dollarcity", [], "Dollarcity.png"]
            if (!localActual || localActual.id !== fila.id_local) {
                localActual = { id: fila.id_local, arreglo: [fila.local, [], fila.logo] };
                pisoActual.arreglo[1].push(localActual.arreglo);
            }
            // Producto: ["Espatula", 10000, 5, "Espatula.jpg"]
            if (fila.producto !== null) {
                localActual.arreglo[1].push([fila.producto, Number(fila.precio), Number(fila.stock), fila.imagen]);
            }
        }

        res.json(CentroComercial);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "No se pudo consultar la base de datos: " + error.message });
    }
});

// Sirve la página (index.html, style.css, script.js, Img/)
app.use(express.static(__dirname));

// Primero se conecta a la base de datos y después enciende el servidor
conexion.conectar()
    .then(function() {
        app.listen(PUERTO, function() {
            console.log("Servidor listo en http://localhost:" + PUERTO);
            console.log("Datos en      http://localhost:" + PUERTO + "/api/centro-comercial");
        });
    })
    .catch(function() {
        console.error("Revise que MySQL esté encendido, que exista la base centro_comercial");
        console.error("y que el usuario y la contraseña en bd/conexion.js sean correctos.");
        process.exit(1);
    });
