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
      sourceId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Sources',
        //   key: 'id'
        // },
      },
      category: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Categories',
        //   key: 'name'
        // }
      },
      country: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Countries',
        //   key: 'name'
        // }
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
    .then(() => queryInterface.addConstraint('News', ['sourceId'], {
      type: 'foreign key',
      name: 'fk_source_news',
      references: { //Required field
        table: 'sources',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }))
    .then(() => queryInterface.addConstraint('News', ['category'], {
      type: 'foreign key',
      name: 'fk_cats_news',
      references: { //Required field
        table: 'categories',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }))
    .then(() => queryInterface.addConstraint('News', ['country'], {
      type: 'foreign key',
      name: 'fk_countries_news',
      references: { //Required field
        table: 'countries',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('News');
  }
};