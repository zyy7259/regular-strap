window.fooParamList = [
  {
    name: 'str',
    type: 'String',
    desc: 'foo'
  },
  {
    name: 'password',
    type: 'Password'
  },
  {
    name: 'number',
    type: 'Number',
    max: 10
  },
  {
    name: 'int',
    type: 'Number',
    max: 10,
    digits: 0
  },
  {
    name: 'float',
    type: 'Number',
    max: 10,
    digits: 2
  },
  {
    name: 'radio',
    type: 'Radios',
    list: [
      {
        value: '1',
        desc: '1'
      },
      {
        value: '2',
        desc: '2'
      }
    ]
  }
]
