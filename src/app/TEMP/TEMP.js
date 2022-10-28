export const data = {
  questions: [
    {
      id: 1234,
      position: 0,
      text: "Тест?",
      type: "radio",
      options: [
        {
          id: 11,
          text: "Да",
        },
        {
          id: 12,
          text: "Нет",
        },
      ],
    },
    {
      id: 1235,
      position: 1,
      text: "Выберите один или несколько вариантов:",
      type: "checkbox",
      options: [
        {
          id: 13,
          text: "Лево",
        },
        {
          id: 14,
          text: "Право",
        },
        {
          id: 15,
          text: "Верх",
        },
        {
          id: 16,
          text: "Низ",
        },
      ],
    },
    {
      id: 1236,
      position: 2,
      text: "Сколько вам лет?",
      type: "open",
      options: [
        {
            id: 17,
            text: 'Открытый текст'
        }
      ],
    },
    {
        id: 1237,
        position: 3,
        text: "Что вы видите на картинке?",
        type: "image",
        url: 'https://surlybikes.com/uploads/bikes/surly-ice-cream-truck-fat-bike-blue-side-BK3492-800x600.jpg',
        options: [
          {
            id: 18,
            text: "Табурет",
          },
          {
            id: 19,
            text: "Велосипед",
          },
        ],
      },
  ],
};
