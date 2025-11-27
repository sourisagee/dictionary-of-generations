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
        { user_id: 1, word_id: 9 },
        { user_id: 1, word_id: 10 },
        { user_id: 1, word_id: 12 },
        { user_id: 1, word_id: 14 },
        { user_id: 1, word_id: 16 },
        { user_id: 1, word_id: 18 },
        { user_id: 1, word_id: 20 },
        { user_id: 1, word_id: 22 },
        { user_id: 1, word_id: 24 },
        { user_id: 1, word_id: 26 },
  
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
        { user_id: 2, word_id: 11 },
        { user_id: 2, word_id: 13 },
        { user_id: 2, word_id: 15 },
        { user_id: 2, word_id: 17 },
        { user_id: 2, word_id: 19 },
        { user_id: 2, word_id: 21 },
        { user_id: 2, word_id: 23 },
        { user_id: 2, word_id: 25 },
    
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Likes', null, {});
  },
};
