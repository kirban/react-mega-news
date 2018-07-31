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
      return queryInterface.bulkInsert('Categories', [
        { name: 'business', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
        { name: 'entertainment', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
        { name: 'general', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
        { name: 'health', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
        { name: 'science', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
        { name: 'sports', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
        { name: 'technology', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString()  }
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
