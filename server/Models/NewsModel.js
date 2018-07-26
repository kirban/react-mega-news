const Sequelize = require('sequelize');
const dbConfig = require('../Database');

const News = dbConfig.define('news', {
    title: {
      type: Sequelize.STRING,
      unique: true
    },
    description: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    },
    urlToImage: {
        type: Sequelize.STRING
    },
    publishedAt: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    source: {
        type: Sequelize.SMALLINT
    }
  });
  
News.sync().then(()=>{
    console.log('News up to date');
})