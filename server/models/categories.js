'use strict';
module.exports = (sequelize, DataTypes) => {
  var Categories = sequelize.define('Categories', {
    name: DataTypes.STRING
  }, {});
  Categories.associate = function(models) {
    // associations can be defined here
    Categories.hasMany(models.Sources);
  };
  return Categories;
};