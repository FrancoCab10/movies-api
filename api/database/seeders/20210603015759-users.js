'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        user: 'franco',
        name: 'Franco',
        lastName: 'Gomez',
        avatar: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: 'alan',
        name: 'Alan',
        lastName: 'Foo',
        avatar: 'https://images.unsplash.com/profile-fb-1527368999-01bec71421e9.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: 'roger',
        name: 'Roger',
        lastName: 'Bar',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=128&w=128&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: 'ana',
        name: 'Ana',
        lastName: 'Doe',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&h=128&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
