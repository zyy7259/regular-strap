/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-27T09:27:02+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-27T09:50:53+08:00
*/

window.paramListCheckboxes = [
  {
    name: 'checkboxesOptionalEmpty',
    type: 'Checkboxes',
    desc: '可选checkboxes, 空',
    list: [
      {
        value: 'a',
        desc: 'apple'
      },
      {
        value: 'b',
        desc: 'boy'
      },
      {
        value: 'c',
        desc: 'cat'
      },
      {
        value: 'd',
        desc: 'dog'
      }
    ]
  },
  {
    name: 'checkboxesOptionalEmptySpread',
    type: 'Checkboxes',
    desc: '可选checkboxes, 空, spread',
    spread: true,
    list: [
      {
        value: 'a',
        desc: 'apple'
      },
      {
        value: 'b',
        desc: 'boy'
      },
      {
        value: 'c',
        desc: 'cat'
      },
      {
        value: 'd',
        desc: 'dog'
      }
    ]
  },
  {
    name: 'checkboxesOptionalWithValue',
    type: 'Checkboxes',
    desc: '可选checkboxes, 带值',
    list: [
      {
        value: 'a',
        desc: 'apple'
      },
      {
        value: 'b',
        desc: 'boy'
      },
      {
        value: 'c',
        desc: 'cat'
      },
      {
        value: 'd',
        desc: 'dog'
      }
    ],
    value: ['b']
  },
  {
    name: 'checkboxesOptionalWithDefault',
    type: 'Checkboxes',
    desc: '可选checkboxes, 带默认值',
    list: [
      {
        value: 'a',
        desc: 'apple'
      },
      {
        value: 'b',
        desc: 'boy'
      },
      {
        value: 'c',
        desc: 'cat'
      },
      {
        value: 'd',
        desc: 'dog'
      }
    ]
  },
  {
    name: 'checkboxesOptionalWithChecked',
    type: 'Checkboxes',
    desc: '可选checkboxes, 带 checked',
    list: [
      {
        value: 'a',
        desc: 'apple'
      },
      {
        value: 'b',
        desc: 'boy',
        checked: true
      },
      {
        value: 'c',
        desc: 'cat'
      },
      {
        value: 'd',
        desc: 'dog'
      }
    ]
  },
  {
    name: 'checkboxesOptionalInteger',
    type: 'Checkboxes',
    desc: '可选checkboxes, 数字',
    list: [
      {
        value: 0,
        desc: '0'
      },
      {
        value: 1,
        desc: '1',
        checked: true
      },
      {
        value: 2,
        desc: '2'
      },
      {
        value: 3,
        desc: '3'
      }
    ]
  },
  {
    name: 'checkboxesMandatoryEmpty',
    type: 'Checkboxes',
    desc: '必选checkboxes空',
    mandatory: true,
    list: [
      {
        value: 'a',
        desc: 'apple'
      },
      {
        value: 'b',
        desc: 'boy'
      },
      {
        value: 'c',
        desc: 'cat'
      },
      {
        value: 'd',
        desc: 'dog'
      }
    ]
  }
]
