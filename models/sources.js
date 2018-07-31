'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sources = sequelize.define('Sources', {
    sourceId: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    category: DataTypes.STRING,
    language: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  Sources.associate = function(models) {
    // associations can be defined here
    Sources.hasMany(models.News, {sourceKey: 'sourceId', constraints: false});
  };
  return Sources;
};