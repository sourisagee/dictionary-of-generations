'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Чилить',
          definition: 'Расслабляться, отдыхать, ничего не делать',
          category: 'zoomers',
          example: 'Сегодня просто чилим с друзьями, никаких дел.',
          like: 38,
          user_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Скибиди',
          definition: 'Бессмысленное выражение из вирусных мемов',
          category: 'zoomers',
          example: 'Скибиди доп доп доп ес ес!',
          like: 89,
          user_id: 1,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Бэнгер',
          definition: 'Очень крутая песня или трек, который всех зажигает',
          category: 'zoomers',
          example: 'Новый трек этого артиста - просто бэнгер!',
          like: 41,
          user_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Флекс',
          definition:
            'Хвастовство, показное демонстрирование своего превосходства или богатства',
          category: 'millennials',
          example: 'Перестань флексить своими новыми кроссовками.',
          like: 29,
          user_id: 1,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Бэнгер',
          definition: 'Очень крутая песня или трек, который всех зажигает',
          category: 'millennials',
          example: 'Новый трек этого артиста - просто бэнгер!',
          like: 41,
          user_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Краш',
          definition: 'Человек, который очень нравится, объект симпатии',
          category: 'boomers',
          example: 'У меня новый краш в группе, не могу на него наглядеться.',
          like: 67,
          user_id: 1,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Кринж',
          definition: 'Сильное чувство стыда и неловкости за кого-то или что-то',
          category: 'boomers',
          example: 'Его танец в TikTok был просто кринж.',
          like: 45,
          user_id: 1,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Хайп',
          definition: 'Шумиха, ажиотаж вокруг чего-либо, временная популярность',
          category: 'boomers',
          example: 'Хайп вокруг нового сериала закончился через неделю.',
          like: 32,
          user_id: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Words', null, {});
  },
};
