'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('News', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      urlToImage: {
        type: Sequelize.STRING
      },
      publishedAt: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      source: {
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
    .then(() => queryInterface.addConstraint('News', ['source'], {
      type: 'foreign key',
      name: 'fk_source_news',
      references: { //Required field
        table: 'sources',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('news');
  }
};