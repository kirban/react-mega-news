'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkInsert('Categories', [
        { name: 'business' },
        { name: 'entertainment' },
        { name: 'general' },
        { name: 'health' },
        { name: 'science' },
        { name: 'sports' },
        { name: 'technology'  }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    //return queryInterface.bulkDelete('Categories', null, {});
    
  }
};
