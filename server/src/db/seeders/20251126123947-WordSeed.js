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

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Буллинг',
          definition: 'Травля, агрессивное преследование одного из членов коллектива',
          category: 'zoomers',
          example:
            'Школьный буллинг может привести к серьезным психологическим проблемам.',
          like: 35,
          user_id: 1,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Го',
          definition: 'Предложение куда-то пойти или что-то сделать',
          category: 'zoomers',
          example: 'Го в кино сегодня вечером?',
          like: 51,
          user_id: 1,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Рофл',
          definition: 'Что-то очень смешное, шутка',
          category: 'zoomers',
          example: 'Этот мем - просто рофл, я плакал от смеха.',
          like: 39,
          user_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Шеймить',
          definition: 'Стыдить, публично осуждать кого-либо',
          category: 'zoomers',
          example: 'Не нужно шеймить людей за их внешность.',
          like: 31,
          user_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Хейтер',
          definition: 'Человек, который проявляет ненависть и агрессию',
          category: 'zoomers',
          example: 'У каждого популярного блогера есть хейтеры.',
          like: 28,
          user_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Лайк',
          definition: 'Отметка "нравится" в социальных сетях',
          category: 'zoomers',
          example: 'Поставь лайк, если согласен с этим мнением.',
          like: 45,
          user_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Байтить',
          definition: 'Копировать чужой стиль или идеи',
          category: 'zoomers',
          example: 'Этот артист байтит у зарубежных коллег.',
          like: 23,
          user_id: 1,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Вайб',
          definition: 'Атмосфера, настроение, эмоциональное состояние',
          category: 'zoomers',
          example: 'На этой вечеринке отличный вайб.',
          like: 52,
          user_id: 1,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Камбэк',
          definition: 'Возвращение к прежней деятельности после перерыва',
          category: 'zoomers',
          example: 'После двухлетнего перерыва группа сделала крутой кэмбэк.',
          like: 37,
          user_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Тренд',
          definition: 'Популярное направление, модное явление',
          category: 'zoomers',
          example: 'Экологичный образ жизни - это современный тренд.',
          like: 41,
          user_id: 1,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Хардкор',
          definition: 'Что-то экстремальное, сложное, на пределе возможностей',
          category: 'zoomers',
          example: 'Этот спорт слишком хардкорный для новичков.',
          like: 30,
          user_id: 1,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Фотожаба',
          definition: 'Отредактированное в графическом редакторе изображение',
          category: 'millennials',
          example: 'Это явно фотожаба, у него никогда не было такой машины.',
          like: 25,
          user_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Превед',
          definition: 'Намеренно искаженное приветствие, интернет-мем',
          category: 'millennials',
          example: 'Превед, медвед! Как дела?',
          like: 18,
          user_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Жжет',
          definition: 'Выражение восхищения или удивления',
          category: 'millennials',
          example: 'Твой новый трек просто жжет!',
          like: 22,
          user_id: 1,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Няшка',
          definition: 'Милый, симпатичный человек или предмет',
          category: 'millennials',
          example: 'Какая няшка этот котенок!',
          like: 35,
          user_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Флейм',
          definition: 'Спор ради спора, горячее обсуждение',
          category: 'millennials',
          example: 'В комментариях разгорелся настоящий флейм.',
          like: 21,
          user_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'ИМХО',
          definition: 'По моему скромному мнению (от англ. IMHO)',
          category: 'millennials',
          example: 'ИМХО, этот фильм сильно переоценен.',
          like: 32,
          user_id: 1,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Копипаста',
          definition: 'Скопированный и вставленный текст',
          category: 'millennials',
          example: 'Это не твое мнение, а обычная копипаста.',
          like: 20,
          user_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Сабж',
          definition: 'Тема обсуждения (от англ. subject)',
          category: 'millennials',
          example: 'Вернемся к сабжу нашего разговора.',
          like: 17,
          user_id: 1,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Words', null, {});
  },
};
