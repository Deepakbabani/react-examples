export const folderData = {
  name: "Main",
  isFolder: true,
  items: [
    {
      name: "Child 1",
      isFolder: true,
      items: [
        {
          name: "subChild",
          isFolder: false,
        },
        {
          name: "subChild 1",
          isFolder: false,
        },
        {
          name: "subChild 2",
          isFolder: false,
        },
      ],
    },
    {
      name: "Child 2",
      isFolder: true,
      items: [
        {
          name: "2 subChild",
          isFolder: false,
        },
        {
          name: "2 subChild 1",
          isFolder: false,
        },
        {
          name: "2 subChild 2",
          isFolder: true,
          items: [
            {
              name: "2 subChild 2 sub sub",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};

export const commentSection = [
  {
    msg: "This is User 1",
    comments: [
      {
        msg: "Hey nice to meet you..",
        comments: [],
      },
      {
        msg: "Hope you r doing well..",
        comments: [
          {
            msg: "Yes I'm good!... what abt u?",
            comments: [],
          },
        ],
      },
    ],
  },
  {
    msg: "This is User 2",
    comments: [
      {
        msg: "Hey nice to see you..",
        comments: [],
      },
      {
        msg: "Hope you doing well..",
        comments: [
          {
            msg: "Yes",
            comments: [],
          },
        ],
      },
    ],
  },
];
