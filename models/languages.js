'use strict';
module.exports = (sequelize, DataTypes) => {
  var Languages = sequelize.define('Languages', {
    name: DataTypes.STRING
  }, {});
  Languages.associate = function(models) {
    // associations can be defined here
    Languages.hasMany(models.Sources);
  };
  return Languages;
};