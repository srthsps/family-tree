export const data = [
  {
    id: 1,
    name: "parent",
    spouse: {
      id: 2,
      name: "parent's wife",
    },
    children: [
      {
        id: 4,
        name: "son 1",
        spouse: {
          id: 3,
          name: "son 1 wife",
        },
        children: [
          {
            id: 5,
            name: "son1 daughter",
            spouse: {
              id: 12,
              name: "son 1 daughter hus",
            },
            children: [
              {
                id: 13,
                name: "child1",
                spouse: {
                  id: 19,
                  name: "child 1 wife",
                },
                children: [
                  {
                    id: 20,
                    name: "child 1  child 1",
                    spouse: null,
                    children: [],
                  },
                  {
                    id: 23,
                    name: "child 1 child 2",
                    spouse: null,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 6,
            name: "son 1 son",
            spouse: {
              id: 15,
              name: "son 1 son wife",
            },
            children: [
              {
                id: 14,
                name: "child 2",
                spouse: {
                  id: 21,
                  name: "child 2 wife",
                },
                children: [
                  {
                    id: 22,
                    name: "child 2 child 1",
                    spouse: null,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 8,
        name: "daughter 2",
        spouse: {
          id: 7,
          name: "daughter 2 hus",
        },
        children: [
          {
            id: 9,
            name: "daughter 2 son",
            spouse: {
              id: 11,
              name: "daughter 2's sons's wife",
            },
            children: [
              {
                id: 17,
                name: "child 4",
                spouse: {
                  id: 27,
                  name: "child 4 wife",
                },
                children: [
                  {
                    id: 28,
                    name: "child 4 child 1",
                    spouse: null,
                    children: [],
                  },
                  {
                    id: 29,
                    name: "child 4 child 2",
                    spouse: null,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 10,
            name: "daughter 2 daughter",
            spouse: {
              id: 18,
              name: "daughter 2 daughter hus",
            },
            children: [
              {
                id: 16,
                name: "child3",
                spouse: {
                  id: 24,
                  name: "child 3 wife",
                },
                children: [
                  {
                    id: 25,
                    name: "child 3 child 1",
                    spouse: null,
                    children: [],
                  },
                  {
                    id: 26,
                    name: "child3 child 2",
                    spouse: null,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
