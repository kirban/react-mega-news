'use strict';
module.exports = (sequelize, DataTypes) => {
  var Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    timestamps: true
  });
  Categories.associate = function(models) {
    // associations can be defined here
    Categories.hasMany(models.Sources);
  };
  return Categories;
};