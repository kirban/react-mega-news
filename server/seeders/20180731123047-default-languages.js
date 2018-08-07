'use strict';

if (!Date.prototype.toSQLString) {
  (function() {

      function pad(number) {
          if (number < 10) {
              return '0' + number;
          }
          return number;
      }

      Date.prototype.toSQLOString = function() {
          return this.getUTCFullYear() +
              '-' + pad(this.getUTCMonth() + 1) +
              '-' + pad(this.getUTCDate()) +
              ' ' + pad(this.getUTCHours()) +
              '-' + pad(this.getUTCMinutes()) +
              '-' + pad(this.getUTCSeconds());
      };
  }());
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('Languages', [
      { name: 'ar', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
      { name: 'de', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
      { name: 'en', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
      { name: 'es', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
      { name: 'fr', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
      { name: 'he', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
      { name: 'it', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
      { name: 'nl', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
      { name: 'no', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
      { name: 'pt', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
      { name: 'ru', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
      { name: 'se', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
      { name: 'ud', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
      { name: 'zh', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() }
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
