import { ContentType, SectionItemType } from "./Interface";

export const CONTENT: ContentType = [
  {
    // Первая вложенность - вкладка
    name: "Tab 1",
    children: [
      {
        // Вторая вложенность - вертикальные группы
        name: "Group 1",
        children: [
          {
            // Третья вложенность - секции, объединяющие кнопки
            name: "Section 1",
            children: [
              {
                // Четвертая вложенность - сами кнопки
                type: SectionItemType.copy,

                // name - текст кнопки
                name: "Item 1",

                // text - текст для копирования в буфер обмена
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",

                // Если необъходимо форматирование текста - лучше используй интерполирующую строку (``).
                // Она сохраняет форматирование без необходимости ввода спец. символов(\n, \t и т.п.)
                // Есть один нюанс - форматирование начинается с начала строки, поэтому делать необходимо следующим образом:
                text: `
        - Схема "User"
        - Схема "Workspace"
        - Схема "Board"
        - Схема "List"
        - Схема "Task"
        - Схема "Chat"
        - Схема "Message"
        `,
              },
              {
                type: SectionItemType.copy,
                name: "Item 3",
                text: "Item 3 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 4",
                text: "Item 4 text",
              },
            ],
          },
          {
            name: "Section 2",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 1",
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 3",
                text: "Item 3 text",
              },
            ],
          },
          {
            name: "Section 3",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 1",
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 3",
                text: "Item 3 text",
              },
            ],
          },
          {
            name: "Section 4",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 1",
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 3",
                text: "Item 3 text",
              },
            ],
          },
          {
            name: "Section 5",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 1",
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 3",
                text: "Item 3 text",
              },
            ],
          },
          {
            name: "Section 6",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 1",
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 3",
                text: "Item 3 text",
              },
            ],
          },
        ],
      },
      {
        name: "Group 2",
        children: [
          {
            name: "Section 1",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 1",
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
            ],
          },
          {
            name: "Section 2",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Tab 2",
    children: [
      {
        // Первая вложенность - вертикальные группы
        name: "Group 1",
        children: [
          {
            // Вторая вложенность - секции, объединяющие кнопки
            name: "Section 1",
            children: [
              {
                // Третья вложенность - сами кнопки
                type: SectionItemType.copy,

                // name - текст кнопки
                name: "Item 1",

                // text - текст для копирования в буфер обмена
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",

                // Если необъходимо форматирование текста - лучше используй интерполирующую строку (``).
                // Она сохраняет форматирование без необходимости ввода спец. символов(\n, \t и т.п.)
                // Есть один нюанс - форматирование начинается с начала строки, поэтому делать необходимо следующим образом:
                text: `
        - Схема "User"
        - Схема "Workspace"
        - Схема "Board"
        - Схема "List"
        - Схема "Task"
        - Схема "Chat"
        - Схема "Message"
        `,
              },
              {
                type: SectionItemType.copy,
                name: "Item 3",
                text: "Item 3 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 4",
                text: "Item 4 text",
              },
            ],
          },
          {
            name: "Section 2",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 1",
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 3",
                text: "Item 3 text",
              },
            ],
          },
          {
            name: "Section 3",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 1",
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 3",
                text: "Item 3 text",
              },
            ],
          },
          {
            name: "Section 4",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 1",
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 3",
                text: "Item 3 text",
              },
            ],
          },
          {
            name: "Section 5",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 1",
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 3",
                text: "Item 3 text",
              },
            ],
          },
          {
            name: "Section 6",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 1",
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 3",
                text: "Item 3 text",
              },
            ],
          },
        ],
      },
      {
        name: "Group 2",
        children: [
          {
            name: "Section 1",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 1",
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
            ],
          },
          {
            name: "Section 2",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
            ],
          },
        ],
      },
      {
        name: "Group 3",
        children: [
          {
            name: "Section 1",
            children: [
              {
                type: SectionItemType.copy,
                name: "Item 1",
                text: "Item 1 text",
              },
              {
                type: SectionItemType.copy,
                name: "Item 2",
                text: "Item 2 text",
              },
              {
                type: SectionItemType.explorer,
                name: "Explorer",
                link: "C:\\Users\\Amir\\Desktop\\projects\\FathersApp",
              },
            ],
          },
        ],
      },
    ],
  },
];
