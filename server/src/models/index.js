const fs = require('fs');
const path = require('path');
const config = require('../config/config');
const { Sequelize, DataTypes, DATE } = require('sequelize');
const db = {};

// initialize Sequeslize with configuration
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

// Read the directory, filter models, and import them
fs.readdirSync(__dirname)
  .filter((file)=>file !=='index.js' && file.endsWith('.js')) //Ensure to only .js file include
  .forEach((file)=>{
    const model = require(path.join(__dirname,file))(sequelize,DataTypes); //Correctly import model
    db[model.name] = model //Asign model to object
  });


// Add associations if any
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  } 
});


// Attach sequelize instance to db object

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db
