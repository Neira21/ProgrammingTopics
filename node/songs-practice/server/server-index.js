const express = require("express");
const { router } = require("./routers/songs-router");

const songsApi = express();
songsApi.use(express.json());

// Arreglo de rutas

songsApi.use("/api/songs", router);

module.exports = { songsApi };
