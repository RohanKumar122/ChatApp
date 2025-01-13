export const SampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John",
    _id: "1",
    groupChat: true,
    members: ["1", "2"],
  },

  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "rio",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "rio",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Vitya",
    _id: "2",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Amit",
    _id: "3",
  },
];

export const sampleNotification = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "rio",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Vitya",
    },
    _id: "2",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Amit",
    },
    _id: "3",
  },
];

export const sampleMessages = [
  {
    attachments: [],
    content: "hello",
    _id: "fsfrfwerfwdsfs",
    sender: {
      _id: "user._id",
      name: "rox",
    },
    chat: "chatId",
    createdAt: "2023-01-01T00:00:00.000Z",
  },
  {
    attachments: [
      {
        public_id: "asasdad",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    _id: "fsfrfwerfwdsfsqq",
    sender: {
      _id: "eqerwqrsff",
      name: "Vitya",
    },
    chat: "chatId",
    createdAt: "2023-01-01T00:00:00.000Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "rio",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "rio_rox",
      friends: 20,
      groups: 5,
    },
    {
      name: "john",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "john_rox",
      friends: 20,
      groups: 25,
    },
  ],

  chats: [
    {
      name: "windows Grou p",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMmembers: 20,
      totalMessages: 25,
      creator: {
        name: "rio",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "xyz group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMmembers: 20,
      totalMessages: 25,
      creator: {
        name: "rox",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages :[
    {
      attachments: [],
      content: "hello",
      _id: "fsfrfwerfwdsfs",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "rox",
      },
      chat: "chatId",
      groupsChat: false,
      createdAt: "2023-01-01T00:00:00.000Z",
    },
    {
      attachments: [
        {
          public_id: "asasdad",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      _id: "fsfrfwerfwdsfsqq",
      sender: {    
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Vitya",
      },
      chat: "chatId",
      groupsChat: true,
      createdAt: "2023-01-01T00:00:00.000Z",
    },
  ]
};


