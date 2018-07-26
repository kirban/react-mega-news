const Sequelize = require('sequelize');
const dbConfig = require('../Database');

const Category = dbConfig.define('category', {
    name: {
      type: Sequelize.STRING
    }
  });
  
  // force: true will drop the table if it already exists
  Category.sync({force: true}).then(() => {
    // Table created
    Category.create({ name: 'business' });
    Category.create({ name: 'entertainment' });
    Category.create({ name: 'general' });
    Category.create({ name: 'health' });
    Category.create({ name: 'science' });
    Category.create({ name: 'sports' });
    Category.create({ name: 'technology' });
  });