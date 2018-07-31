const Sequelize = require('sequelize');
const dbConfig = require('../Database');

module.exports = News = dbConfig.define('news', {
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
    source_id: {
        type: Sequelize.SMALLINT,
    }
  });
  

// News.sync({force: true}).then(()=>{
//     console.log('News up to date');
// })

