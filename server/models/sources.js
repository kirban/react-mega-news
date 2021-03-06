'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sources = sequelize.define('Sources', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    category: DataTypes.STRING,
    language: DataTypes.STRING,
    country: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: true
  });
  Sources.associate = function(models) {
    // associations can be defined here    
    Sources.belongsTo(models.Languages);
    Sources.belongsTo(models.Categories);
    Sources.belongsTo(models.Countries);
    Sources.hasMany(models.News);
  };
  return Sources;
};