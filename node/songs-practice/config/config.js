require("dotenv").config();

// Acá van todas las variables de entorno y configuración

module.exports = {
  PORT: process.env.PORT || 3000,
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
  },
  // Puedes agregar test y production si lo necesitas
};
