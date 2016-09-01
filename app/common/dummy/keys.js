export const keys = [{
  id: "1",
  name: "key 1",
  locker: {
    id: "1",
    name: "品川駅ロッカー",
    capacity: 30,
    availabe: 14,
    address: ""
  },
  boxId: "3",
  permissions: [{
    id: "p1",
    key: "1",
    grantedTo: "kate",
    begins: "2016-05-14T02:00",
    ends: "2016-05-14T10:00",
    expired: "false"
  }],
  accessHistory: [{
    id: "a1",
    key: '1',
    time: "2016-05-16T13:32",
    type: "CHECK_OUT",
    locker: "2",
    boxId: "2"
  },
  {
    id: "a2",
    key: '1',
    time: "2016-05-16T12:32",
    type: "CHECK_IN",
    locker: "1",
    boxId: "3"
  }]
},{
  id: "2",
  name: "key 2",
  locker: null,
  boxId: null,
  permissions: [{
    id: "p2",
    key: "2",
    grantedTo: "mike",
    begins: "2016-05-16T03:00",
    ends: "2016-05-16T09:00",
    expired: "false"
  }],
  accessHistory: []
},{
  id: "3",
  name: "key 3",
  locker: {
    id: "8",
    name: "ドトール新橋銀座口店内",
    capacity: 40,
    availabe: 15,
    address: ""
  },
  boxId: 13,
  permissions: [],
  accessHistory: []
},{
  id: "4",
  name: "key 4",
  locker: {
    id: "1",
    name: "品川駅ロッカー",
    capacity: 30,
    availabe: 14,
    address: ""
  },
  boxId: null,
  permissions: [],
  accessHistory: []
},{
  id: "5",
  name: "key 5",
  locker: {
    id: "1",
    name: "品川駅ロッカー",
    capacity: 30,
    availabe: 14,
    address: ""
  },
  boxId: 4,
  permissions: [],
  accessHistory: []
},{
  id: "6",
  name: "key 6",
  locker: {
    id: "9",
    name: "渋谷駅東口ロッカー",
    capacity: 30,
    availabe: 14,
    address: ""
  },
  boxId: 6,
  permissions: [],
  accessHistory: []
},{
  id: "7",
  name: "key 7",
  locker: {
    id: "10",
    name: "新宿駅ロッカー",
    capacity: 30,
    availabe: 14,
    address: ""
  },
  boxId: 7,
  permissions: [],
  accessHistory: []
}
]
