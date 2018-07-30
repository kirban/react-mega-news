// *****
// This code will run after building an application. Its' purpose is to create user,
// create database, create tables and rows
// *****

const Sequelize = require('sequelize');
const config = require('./Config/config');


module.exports = dbConfig = new Sequelize(config.db_name, config.db_user, config.db_pass, {
  host: config.host,
  dialect: config.db_dialect,
  operatorsAliases: config.operatorsAliases,
  pool: config.db_pool
});

dbConfig
  .authenticate()
  .then(() => {   
    require('./Models/NewsModel');
    require('./Models/CoutriesModel');
    require('./Models/CategoriesModel');
    require('./Models/LanguagesModel');
    require('./Models/SourcesModel');
    
    
    console.log('Connection to the database has been established successfully.');    
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });