'use strict';
module.exports = (sequelize, DataTypes) => {
  var Languages = sequelize.define('Languages', {
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    timestamps: true
  });
  Languages.associate = function(models) {
    // associations can be defined here
    Languages.hasMany(models.Sources);
  };
  return Languages;
};