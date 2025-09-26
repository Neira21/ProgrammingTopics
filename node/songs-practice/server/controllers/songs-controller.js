const models = require("../../database/models/index");

const addSong = async (req, res) => {
  try {
    const { body } = req;

    const newSong = await models.songs.create({
      id: body.id,
      songTitle: body.songTitle,
      artist: body.artist,
      album: body.album,
    });

    return res.status(200).send({
      message: "Canción añadida",
      newSong: newSong,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Lo sentimos, ha ocurrido un error interno en el servidor",
    });
  }
};

const getAllSongs = async (req, res) => {
  try {
    const allSongs = await models.songs.findAll();

    if (allSongs.length === 0) {
      return res.status(404).send({
        message: "No se han encontrado canciones",
      });
    }

    return res.status(200).send({ allSongs: allSongs });
  } catch (error) {
    return res.status(500).send({
      message: "Lo sentimos, ha ocurrido un error interno en el servidor",
    });
  }
};

const getRandomSongs = async (req, res) => {
  try {
    const randomSongs = await models.songs.findOne({
      order: models.songs.random(), // Ordena aleatoriamente
      include: [{ model: models.songs }],
    });

    if (!randomSongs) {
      return res.status(404).send({
        message: "No se han encontrado canciones",
      });
    }

    return res
      .status(200)
      .send({ message: "Canción del día: ", randomSongs: randomSongs });
  } catch (error) {
    return res.status(500).send({
      message: "Lo sentimos, ha ocurrido un error interno en el servidor",
    });
  }
};

const updateSong = async (req, res) => {
  try {
    const { body } = req;
    const songsID = Number(req.params.id);
    const song = await models.songs.findByPk(songsID);

    if (song) {
      await song.update({
        id: body.id,
        songTitle: body.songTitle,
        artist: body.artist,
        album: body.album,
      });

      return res.status(200).send({
        message: "Canción modificada",
      });
    } else {
      return res.status(404).send({
        message: "Canción no encontrada",
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Ha ocurrido un error interno en el servidor",
    });
  }
};

const deleteSong = async (req, res) => {
  try {
    const songsID = Number(req.params.id);
    const song = await models.songs.findByPk(songsID);
    if (song) {
      await song.destroy();
      return res.status(200).send({
        message: "Canción eliminada",
      });
    } else {
      return res.status(404).send({
        message: "Canción no encontrada",
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Lo sentimos, ha ocurrido un error interno en el servidor",
    });
  }
};

module.exports = {
  addSong,
  getAllSongs,
  getRandomSongs,
  updateSong,
  deleteSong,
};
