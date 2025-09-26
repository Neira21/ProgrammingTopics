const {
  addSong,
  getRandomSongs,
  getAllSongs,
  updateSong,
  deleteSong,
} = require("../controllers/songs-controller");
const { Router } = require("express");
const router = Router();

router.get("/", getAllSongs);
router.post("/", addSong);
router.get("/random", getRandomSongs);
router.put("/:id", updateSong);
router.delete("/:id", deleteSong);

module.exports = { router };
