'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('userAuths', [
      {
        userId: 1,
        password: '$2b$10$yQ3dmMEwbdDVI2RFGQMEY.m1yL3BiQjvyZ2tvda3rnQqk.tm5chj2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        password: '$2b$10$yQ3dmMEwbdDVI2RFGQMEY.m1yL3BiQjvyZ2tvda3rnQqk.tm5chj2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        password: '$2b$10$yQ3dmMEwbdDVI2RFGQMEY.m1yL3BiQjvyZ2tvda3rnQqk.tm5chj2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        password: '$2b$10$yQ3dmMEwbdDVI2RFGQMEY.m1yL3BiQjvyZ2tvda3rnQqk.tm5chj2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userAuths', null, {});
  }
};
