// Clase Conexion: se encarga de conectarse a la base de datos MySQL "centro_comercial"
// (creada con bd/centro_comercial.sql) y de ejecutar las consultas.

const mysql = require("mysql2/promise");

class Conexion {

    constructor() {
        // Datos de conexión: cámbialos según tu instalación de MySQL
        this.configuracion = {
            host: process.env.DB_HOST || "localhost",
            port: process.env.DB_PORT || 3306,
            user: process.env.DB_USER || "root",
            password: process.env.DB_PASSWORD || "",
            database: process.env.DB_NAME || "centro_comercial"
        };
        this.pool = null;
    }

    // Abre la conexión (un pool que reutiliza conexiones) y la prueba
    async conectar() {
        try {
            this.pool = mysql.createPool(this.configuracion);
            await this.pool.query("SELECT 1");
            console.log("Conexión exitosa a la base de datos " + this.configuracion.database);
        } catch (error) {
            console.error("Error al conectar con la base de datos: " + error.message);
            throw error;
        }
    }

    // Ejecuta una consulta SQL y devuelve las filas
    async consultar(sql, parametros = []) {
        if (!this.pool) {
            await this.conectar();
        }
        const [filas] = await this.pool.query(sql, parametros);
        return filas;
    }

    // Cierra la conexión
    async desconectar() {
        if (this.pool) {
            await this.pool.end();
            this.pool = null;
            console.log("Conexión cerrada");
        }
    }
}

module.exports = Conexion;
