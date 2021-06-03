'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER,
        defaultValue: 1800
      },
      rated: {
        allowNull: false,
        type: Sequelize.STRING
      },
      released_on: {
        allowNull: false,
        type: Sequelize.DATE
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      director: {
        allowNull: false,
        type: Sequelize.STRING
      },
      plot: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movies');
  }
};