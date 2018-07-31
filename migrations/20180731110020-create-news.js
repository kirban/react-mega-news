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
        references: {
          model: 'Sources',
          key: 'id'
        },
      },
      // category: {
      //   type: Sequelize.STRING,
      //   references: {
      //     model: 'Categories',
      //     key: 'name'
      //   }
      // },
      // country: {
      //   type: Sequelize.STRING,
      //   references: {
      //     model: 'Countries',
      //     key: 'name'
      //   }
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('News');
  }
};