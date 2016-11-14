window.selectParamList = [
  {
    name: 'key0',
    type: 'Select',
    list: [
      {
        value: 1,
        desc: 'one'
      },
      {
        value: 2,
        desc: 'two'
      },
      {
        value: 3,
        desc: 'three'
      }
    ]
  },
  {
    name: 'key1',
    type: 'Select',
    list: [
      {
        value: '',
        desc: '请选择'
      },
      {
        value: 1,
        desc: 'one'
      }
    ]
  },
  {
    name: 'key2',
    type: 'Select',
    mandatory: true,
    list: [
      {
        value: '',
        desc: '请选择'
      },
      {
        value: 1,
        desc: 'one'
      }
    ]
  },
  {
    name: 'disabled1',
    type: 'Select',
    desc: 'disabled',
    disabled: true,
    list: [
      {
        value: '',
        desc: '请选择'
      },
      {
        value: 1,
        desc: 'one'
      },
      {
        value: 2,
        desc: 2
      }
    ]
  },
  {
    name: 'disabled2',
    type: 'Select',
    desc: 'disabled',
    disabled: true,
    required: true,
    list: [
      {
        value: '',
        desc: '请选择'
      },
      {
        value: 1,
        desc: 'one'
      },
      {
        value: 2,
        desc: 2,
        selected: true
      }
    ]
  }
]
