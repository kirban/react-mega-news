'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sourceId: {
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
        type: Sequelize.INTEGER
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
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }));
  },
  down: (queryInterface, Sequelize) => {
    return (queryInterface.removeConstraint('sources', 'fk_lang_source')
    .then(queryInterface.removeConstraint('sources', 'fk_source_news'))
    .then(queryInterface.dropTable('sources')));
  }
};