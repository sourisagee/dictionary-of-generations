'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const user1Password = await bcrypt.hash('Doe12345@', 10);
    const user2Password = await bcrypt.hash('Kim12345@', 10);
    const user3Password = await bcrypt.hash('Men12345@', 10);

    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: 'doe@mail.com',
          password: user1Password,
          role: 'user',
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Kim T',
          email: 'kim@mail.com',
          password: user2Password,
          role: 'user',
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Lee Men',
          email: 'men@mail.com',
          password: user3Password,
          role: 'admin',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
