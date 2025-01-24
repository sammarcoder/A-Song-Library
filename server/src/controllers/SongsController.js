const { Songs, sequelize } = require("../models");
module.exports = {
  // Get all songs Api
  getAllSongs: async (req, res) => {
    try {
      const songs = await Songs.findAll({ limit: 10 });
      //   songsJson = songs.toJSON();
      res.send(songs);
    } catch (err) {
      res.status(500).send({
        error: `An error occured while trying to fetching the data ${err.message}`,
      });
    }
  },

  // postSong Api
  createSong: async (req, res) => {
    try {
      const song = await Songs.create(req.body);
      songJson = song.toJSON();
      return res.send(songJson);
    } catch (err) {
      res.status(500).send({
        error: `An error occured while trying to post a song ${err.message}`,
      });
    }
  },

  // GetSongById Api

  getSongById: async (req, res) => {
    try {
      const { songId } = req.params;
      console.log("Looking for song with ID:", songId);
      const song = await Songs.findByPk(songId);
      if (!song) {
        return res.status(400).send({
          error: `this song does not exist`,
        });
      }
      return res.send(song);
    } catch (err) {
      res.status(500).send({
        error: `there is error whilw fetching this song ${err.message}`,
      });
    }
  },

  // Update Song Api
  putInSong: async (req, res) => {
    try {
      const { songId } = req.params; // Get the songId from the URL
      const updatedData = req.body; // Get the updated data from the request body

      // Perform the update and return the updated song(s)
      const [affectedRows, updatedSongs] = await Songs.update(updatedData, {
        where: { id: songId },
        returning: true, // This ensures we get the updated rows back
      });

      console.log("Number of rows updated:", affectedRows);
      console.log("Updated song:", updatedSongs);

      // If no rows were updated, it means the song wasn't found or no changes were made
      if (affectedRows === 0) {
        return res
          .status(404)
          .send({ error: "Song not found or no changes made" });
      }

      // Send back the updated song
      return res.send({
        message: "Song updated successfully",
        song: updatedSongs[0], // Return the first updated song object
      });
    } catch (err) {
      res.status(500).send({
        error: `An error occurred during the update of the song: ${err.message}`,
      });
    }
  },
  delteById: async (req, res) => {
    try {
      //   const { songId } = req.params;
      console.log(`your id is ${req.params.songId}`);
      const songDelete = await Songs.destroy({
        where: {
          id: req.params.songId,
        },
      });
      return res.status(200).send({
        message: "Song delted sucessfully",
      });
    } catch (err) {
      res.statue(500).send({
        error: `An error Occured While Trying to delete an sons`,
      });
    }
  },

  deleteAllSongs: async (req, res) => {
    try {
      const transaction = await sequelize.transaction();
      const songsDelete = Songs.destroy({
        where: {},
        transaction: transaction,
      });

      await sequelize.query("ALTER TABLE songs AUTO_INCREMENT = 1", {
        transaction: transaction,
      });

      await transaction.commit();

      return res.status(200).send({
        message: `All songs are deleted id starts from 1`,
      });
    } 
    
    catch (error) {
      // await transaction.rollback();
      console.error('Error deleting songs:', error);
      return res.status(500).json({
        error: `An error occurred while trying to delete all songs: ${error.message}`,
      });
    }
  },
};
