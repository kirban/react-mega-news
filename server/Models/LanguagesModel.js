const Sequelize = require('sequelize');
const dbConfig = require('../Database');

module.exports =  Language = dbConfig.define('language', {
    name: {
      type: Sequelize.STRING,
    }
  });


  // force: true will drop the table if it already exists
  Language.sync({force: true}).then(() => {
    // Table created
    Language.create({ name: 'ar' });
    Language.create({ name: 'de' });
    Language.create({ name: 'en' });
    Language.create({ name: 'es' });
    Language.create({ name: 'fr' });
    Language.create({ name: 'he' });
    Language.create({ name: 'it' });
    Language.create({ name: 'nl' });
    Language.create({ name: 'no' });
    Language.create({ name: 'pt' });
    Language.create({ name: 'ru' });
    Language.create({ name: 'se' });
    Language.create({ name: 'ud' });
    Language.create({ name: 'zh' });
  });

