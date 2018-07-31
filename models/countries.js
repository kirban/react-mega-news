'use strict';
module.exports = (sequelize, DataTypes) => {
  var Countries = sequelize.define('Countries', {
    name: DataTypes.STRING
  }, {});
  Countries.associate = function(models) {
    // associations can be defined here
    Countries.hasMany(models.News);
  };
  return Countries;
};