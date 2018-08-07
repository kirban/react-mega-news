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
      
   return queryInterface.bulkInsert('Countries', [
    { name: 'ar', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'at', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'au', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'be', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'bg', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'br', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'ca', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'ch', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'cn', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'co', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'cu', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'cz', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'de', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'eg', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'fr', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'gb', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'gr', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'hk', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'hu', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'id', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'ie', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'il', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'in', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'it', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'jp', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'kr', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'lt', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'lv', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'ma', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'mx', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'my', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'ng', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'nl', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'no', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'nz', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'ph', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'pl', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'pt', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'ro', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'rs', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'ru', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'sa', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'se', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'sg', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'si', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'sk', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'th', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'tr', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'tw', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'ua', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'us', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 've', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() },
    { name: 'za', createdAt: (new Date()).toSQLOString(), updatedAt: (new Date()).toSQLOString() }
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
