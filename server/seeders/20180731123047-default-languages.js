'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('Languages', [
      { name: 'ar' },
      { name: 'de' },
      { name: 'en' },
      { name: 'es' },
      { name: 'fr' },
      { name: 'he' },
      { name: 'it' },
      { name: 'nl' },
      { name: 'no' },
      { name: 'pt' },
      { name: 'ru' },
      { name: 'se' },
      { name: 'ud' },
      { name: 'zh' }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    
    //return queryInterface.bulkDelete('Languages', null, {});
  }
};
