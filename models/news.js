'use strict';
module.exports = (sequelize, DataTypes) => {
  var News = sequelize.define('News', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    urlToImage: DataTypes.STRING,
    publishedAt: DataTypes.STRING,
    author: DataTypes.STRING,
    sourceId: DataTypes.UUID
  }, {});
  News.associate = function(models) {
    // associations can be defined here
    News.belongsTo(models.Sources, {targetKey: 'sourceId', constraints: false});
  };
  return News;
};