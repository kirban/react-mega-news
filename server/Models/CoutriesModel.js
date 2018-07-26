const Sequelize = require('sequelize');
const dbConfig = require('../Database');

const Country = dbConfig.define('country', {
    name: {
      type: Sequelize.STRING
    }
  });
  
  // force: true will drop the table if it already exists
  Country.sync({force: true}).then(() => {
    // Table created
    Country.create({ name: 'ar' });
    Country.create({ name: 'ar' });
    Country.create({ name: 'at' });
    Country.create({ name: 'au' });
    Country.create({ name: 'be' });
    Country.create({ name: 'bg' });
    Country.create({ name: 'br' });
    Country.create({ name: 'ca' });
    Country.create({ name: 'ch' });
    Country.create({ name: 'cn' });
    Country.create({ name: 'co' });
    Country.create({ name: 'cu' });
    Country.create({ name: 'cz' });
    Country.create({ name: 'de' });
    Country.create({ name: 'eg' });
    Country.create({ name: 'fr' });
    Country.create({ name: 'gb' });
    Country.create({ name: 'gr' });
    Country.create({ name: 'hk' });
    Country.create({ name: 'hu' });
    Country.create({ name: 'id' });
    Country.create({ name: 'ie' });
    Country.create({ name: 'il' });
    Country.create({ name: 'in' });
    Country.create({ name: 'it' });
    Country.create({ name: 'jp' });
    Country.create({ name: 'kr' });
    Country.create({ name: 'lt' });
    Country.create({ name: 'lv' });
    Country.create({ name: 'ma' });
    Country.create({ name: 'mx' });
    Country.create({ name: 'my' });
    Country.create({ name: 'ng' });
    Country.create({ name: 'nl' });
    Country.create({ name: 'no' });
    Country.create({ name: 'nz' });
    Country.create({ name: 'ph' });
    Country.create({ name: 'pl' });
    Country.create({ name: 'pt' });
    Country.create({ name: 'ro' });
    Country.create({ name: 'rs' });
    Country.create({ name: 'ru' });
    Country.create({ name: 'sa' });
    Country.create({ name: 'se' });
    Country.create({ name: 'sg' });
    Country.create({ name: 'si' });
    Country.create({ name: 'sk' });
    Country.create({ name: 'th' });
    Country.create({ name: 'tr' });
    Country.create({ name: 'tw' });
    Country.create({ name: 'ua' });
    Country.create({ name: 'us' });
    Country.create({ name: 've' });
    Country.create({ name: 'za' });
  });