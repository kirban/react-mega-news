'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sources', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => queryInterface.addConstraint('Sources', ['language'], {
      type: 'foreign key',
      name: 'fk_lang_source',
      references: { //Required field
        table: 'languages',
        field: 'name'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }))
    .then(() => queryInterface.addConstraint('Sources', ['category'], {
      type: 'foreign key',
      name: 'fk_cat_source',
      references: { //Required field
        table: 'categories',
        field: 'name'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }))
    .then(() => queryInterface.addConstraint('Sources', ['country'], {
      type: 'foreign key',
      name: 'fk_country_source',
      references: { //Required field
        table: 'countries',
        field: 'name'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sources');
  }
};