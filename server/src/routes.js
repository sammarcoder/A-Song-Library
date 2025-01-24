const Authentication = require("./controllers/Authentication");
// const authentication = require("./controllers/Authentication");
const songsController = require("./controllers/SongsController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    Authentication.register
  );

  app.post("/login", Authentication.login);

  // Routes for Songs Api
  app.get("/songs", songsController.getAllSongs);
  app.post("/songPost", songsController.createSong);
  app.get("/songs/:songId", songsController.getSongById);
  app.put("/songs/:songId", songsController.putInSong);
  app.delete("/songs/:songId", songsController.delteById);
  app.delete('/deleteAll', songsController.deleteAllSongs)
};
