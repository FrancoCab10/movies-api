'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comments', [
      {
        id: 1,
        comment: 'Awesome movie!',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        movieId: 1
      },
      {
        id: 2,
        comment: 'Liked it very much!',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        movieId: 1
      },
      {
        id: 3,
        comment: 'Not THAT good tho...',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        movieId: 1
      },
      {
        id: 4,
        comment: 'I love every movie by Christopher Nolan!',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        movieId: 2
      },
      {
        id: 5,
        comment: 'No less is expected from Christopher Nolan...',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        movieId: 2
      },
      {
        id: 6,
        comment: 'Interesting story!',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        movieId: 4
      },
      {
        id: 7,
        comment: 'Mindblown...',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        movieId: 1
      },
      {
        id: 8,
        comment: 'Fun to watch with the family!',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        movieId: 3
      },
      {
        id: 9,
        comment: 'The only good thing about the movie is the dog...',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        movieId: 3
      },
      {
        id: 10,
        comment: 'I recommend this movie to any Sci-Fi fan',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        movieId: 2
      },
      {
        id: 11,
        comment: 'It was a little slow for my taste',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        movieId: 4
      },
      {
        id: 12,
        comment: 'Weird movie.',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        movieId: 4
      },
      {
        id: 13,
        comment: 'Not my type of movie, but it\'s fine for kids',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        movieId: 3
      },
      {
        id: 14,
        comment: 'Nice... a little complicated but really nice.',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        movieId: 2
      },
      {
        id: 15,
        comment: 'I really enjoyed it!',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        movieId: 4
      },
      {
        id: 16,
        comment: 'Really fun! brings back childhood memories!',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        movieId: 3
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {});
  }
};
