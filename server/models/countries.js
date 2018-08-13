'use strict';
module.exports = (sequelize, DataTypes) => {
  var Countries = sequelize.define('Countries', {
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    timestamps: true
  });
  Countries.associate = function(models) {
    // associations can be defined here
    Countries.hasMany(models.Sources);
  };
  return Countries;
};