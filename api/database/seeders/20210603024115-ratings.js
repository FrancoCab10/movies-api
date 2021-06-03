'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ratings', [
      {
        id: 1,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        movieId: 1
      },
      {
        id: 2,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        movieId: 2
      },
      {
        id: 3,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        movieId: 2
      },
      {
        id: 4,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        movieId: 4
      },
      {
        id: 5,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        movieId: 1
      },
      {
        id: 6,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        movieId: 3
      },
      {
        id: 7,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        movieId: 2
      },
      {
        id: 8,
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        movieId: 3
      },
      {
        id: 9,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        movieId: 4
      },
      {
        id: 10,
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        movieId: 4
      },
      {
        id: 11,
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        movieId: 3
      },
      {
        id: 12,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        movieId: 2
      },
      {
        id: 13,
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        movieId: 4
      },
      {
        id: 14,
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        movieId: 1
      },
      {
        id: 15,
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        movieId: 3
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ratings', null, {});
  }
};
