// *****
// This code will run after building an application. Its' purpose is to create user,
// create database, create tables and rows
// *****

const Sequelize = require('sequelize');


module.exports = dbConfig = new Sequelize('reactmeganews', 'root', 'romanich95', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

dbConfig
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    const Source = require('./Models/SourcesModel');
    const Country = require('./Models/CoutriesModel');
    const Category = require('./Models/CategoriesModel');
    const Language = require('./Models/LanguagesModel');
    const News = require('./Models/NewsModel');
    
    Source;
    Country;
    Category;
    Language;
    News;

    
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });