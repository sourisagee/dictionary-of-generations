'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Likes',
      [
        { user_id: 1, word_id: 2 },
        { user_id: 1, word_id: 1 },
        { user_id: 1, word_id: 4 },
        { user_id: 1, word_id: 6 },
        { user_id: 1, word_id: 7 },
        { user_id: 1, word_id: 8 },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Likes',
      [
        { user_id: 2, word_id: 1 },
        { user_id: 2, word_id: 2 },
        { user_id: 2, word_id: 3 },
        { user_id: 2, word_id: 4 },
        { user_id: 2, word_id: 5 },
        { user_id: 2, word_id: 8 },
        { user_id: 2, word_id: 7 },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Likes', null, {});
  },
};
