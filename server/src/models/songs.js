module.exports = (sequelize, DataTypes) => {
  const Songs = sequelize.define("Songs", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gener: {
      type: DataTypes.STRING,
    },
    album:{
        type:DataTypes.STRING,
    },
    albumUrl:{
        type: DataTypes.STRING,
    },
    lyrics:{
        type:DataTypes.STRING,
    },
    tab:{
        type:DataTypes.STRING,
    }
  });
  return Songs
};
