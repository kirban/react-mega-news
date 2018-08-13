'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
   return queryInterface.bulkInsert('Countries', [
    { name: 'ar' },
    { name: 'at' },
    { name: 'au' },
    { name: 'be' },
    { name: 'bg' },
    { name: 'br' },
    { name: 'ca' },
    { name: 'ch' },
    { name: 'cn' },
    { name: 'co' },
    { name: 'cu' },
    { name: 'cz' },
    { name: 'de' },
    { name: 'eg' },
    { name: 'fr' },
    { name: 'gb' },
    { name: 'gr' },
    { name: 'hk' },
    { name: 'hu' },
    { name: 'id' },
    { name: 'ie' },
    { name: 'il' },
    { name: 'in' },
    { name: 'it' },
    { name: 'jp' },
    { name: 'kr' },
    { name: 'lt' },
    { name: 'lv' },
    { name: 'ma' },
    { name: 'mx' },
    { name: 'my' },
    { name: 'ng' },
    { name: 'nl' },
    { name: 'no' },
    { name: 'nz' },
    { name: 'ph' },
    { name: 'pl' },
    { name: 'pt' },
    { name: 'ro' },
    { name: 'rs' },
    { name: 'ru' },
    { name: 'sa' },
    { name: 'se' },
    { name: 'sg' },
    { name: 'si' },
    { name: 'sk' },
    { name: 'th' },
    { name: 'tr' },
    { name: 'tw' },
    { name: 'ua' },
    { name: 'us' },
    { name: 've' },
    { name: 'za' }
  ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    
    //return queryInterface.bulkDelete('Countries', null, {});
    
  }
};
