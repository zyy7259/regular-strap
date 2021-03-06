/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-02 22:39:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-08-05T14:02:20+08:00
*/

var paramList = [
  // Static
  {
    name: 'staticEmpty',
    type: 'Static',
    desc: '只读文本, 空'
  },
  {
    name: 'staticWithValue',
    type: 'Static',
    desc: '只读文本, 带值',
    value: 'staticWithValue'
  },
  {
    name: 'staticWithDefault',
    type: 'Static',
    desc: '只读文本, 带默认值'
  },
  {
    name: 'staticWithSuffix',
    type: 'Static',
    desc: '只读文本, 带附加值',
    suffix: 'suffix'
  },
  {
    name: 'staticWithSubtitle',
    type: 'Static',
    desc: '只读文本, 带 subtitle',
    subtitle: 'subtitle'
  },
  // String
  {
    name: 'strOptionalEmpty',
    type: 'String',
    desc: '可选字符串, 空'
  },
  {
    name: 'strOptionalWithValue',
    type: 'String',
    desc: '可选字符串, 带值',
    value: 'strOptionalWithValue'
  },
  {
    name: 'strOptionalWithDefault',
    type: 'String',
    desc: '可选字符串, 带默认值'
  },
  {
    name: 'strOptionalWithMax',
    type: 'String',
    desc: '可选字符串, 带 maxlength',
    maxlength: 3
  },
  {
    name: 'strMandatoryEmpty',
    type: 'String',
    desc: '必填字符串, 空',
    mandatory: true
  },
  // Number
  {
    name: 'integerOptionalEmpty',
    type: 'Number',
    desc: '可选数字, 空'
  },
  {
    name: 'integerOptionalWithValue',
    type: 'Number',
    desc: '可选数字, 带值',
    value: 0
  },
  {
    name: 'integerOptionalWithDefault',
    type: 'Number',
    desc: '可选数字, 带默认值'
  },
  {
    name: 'integerOptionalWithMin',
    type: 'Number',
    desc: '可选数字, 带 min',
    min: 3
  },
  {
    name: 'integerOptionalWithMax',
    type: 'Number',
    desc: '可选数字, 带 max',
    min: 3
  },
  {
    name: 'integerOptionalWithMinMax',
    type: 'Number',
    desc: '可选数字, 带 min max',
    min: 3,
    max: 5
  },
  {
    name: 'integerMandatoryEmpty',
    type: 'Number',
    desc: '必选数字, 空',
    mandatory: true
  },
  // Email
  {
    name: 'emailOptionalEmpty',
    type: 'Email',
    desc: '可选邮箱, 空'
  },
  {
    name: 'emailOptionalWithValue',
    type: 'Email',
    desc: '可选邮箱, 带值',
    value: 'emailOptionalWithValue@163.com'
  },
  {
    name: 'emailOptionalWithDefault',
    type: 'Email',
    desc: '可选邮箱, 带默认值'
  },
  {
    name: 'emailMandatoryEmpty',
    type: 'Email',
    desc: '必选邮箱空',
    mandatory: true
  },
  // Password
  {
    name: 'passwordOptional',
    type: 'Password',
    desc: 'password'
  },
  // DateTime
  {
    name: 'dateTimeOptionalEmpty',
    type: 'DateTime',
    desc: '可选日期, 空'
  },
  {
    name: 'dateTimeOptionalWithValue',
    type: 'DateTime',
    desc: '可选日期, 带值',
    value: new Date()
  },
  {
    name: 'dateTimeOptionalWithDefault',
    type: 'DateTime',
    desc: '可选日期, 带默认值'
  },
  {
    name: 'dateTimeMandatoryEmpty',
    type: 'DateTime',
    desc: '必选日期空',
    mandatory: true
  },
  // DateStr
  {
    name: 'dateStrOptionalEmpty',
    type: 'DateStr',
    desc: '可选日期字符串, 空'
  },
  {
    name: 'dateStrOptionalWithValue',
    type: 'DateStr',
    desc: '可选日期字符串, 带值',
    value: '2016-06-16'
  },
  {
    name: 'dateStrOptionalWithDefault',
    type: 'DateStr',
    desc: '可选日期字符串, 带默认值'
  },
  {
    name: 'dateStrMandatoryEmpty',
    type: 'DateStr',
    desc: '必选日期字符串空',
    mandatory: true
  },
  // MonthStr
  {
    name: 'monthStrOptionalEmpty',
    type: 'MonthStr',
    desc: '可选月份字符串, 空'
  },
  {
    name: 'monthStrOptionalWithValue',
    type: 'MonthStr',
    desc: '可选月份字符串, 带值',
    value: '2016-06'
  },
  {
    name: 'monthStrOptionalWithDefault',
    type: 'MonthStr',
    desc: '可选月份字符串, 带默认值'
  },
  {
    name: 'monthStrMandatoryEmpty',
    type: 'MonthStr',
    desc: '必选月份字符串空',
    mandatory: true
  },
  // Select
  {
    name: 'selectOptionalEmpty',
    type: 'Select',
    desc: '可选选择器, 空',
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
    name: 'selectOptionalWithValue',
    type: 'Select',
    desc: '可选选择器, 带值',
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
    value: 'b'
  },
  {
    name: 'selectOptionalWithDefault',
    type: 'Select',
    desc: '可选选择器, 带默认值',
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
    name: 'selectOptionalWithSelected',
    type: 'Select',
    desc: '可选选择器, 带 selected',
    list: [
      {
        value: 'a',
        desc: 'apple'
      },
      {
        value: 'b',
        desc: 'boy',
        selected: true
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
    name: 'selectOptionalInteger',
    type: 'Select',
    desc: '可选选择器, 数字',
    list: [
      {
        value: 0,
        desc: '0'
      },
      {
        value: 1,
        desc: '1'
      },
      {
        value: 2,
        desc: '2',
        selected: true
      },
      {
        value: 3,
        desc: '3'
      }
    ]
  },
  {
    name: 'selectMandatoryEmpty',
    type: 'Select',
    desc: '必选选择器, 空',
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
  // Radios
  {
    name: 'radiosOptionalEmpty',
    type: 'Radios',
    desc: '可选radio, 空, 带disabled',
    list: [
      {
        value: 'a',
        desc: 'apple',
        disabled: true
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
    name: 'radiosOptionalWithValue',
    type: 'Radios',
    desc: '可选radio, 带值',
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
    value: 'b'
  },
  {
    name: 'radiosOptionalWithDefault',
    type: 'Radios',
    desc: '可选radio, 带默认值',
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
    name: 'radiosOptionalWithChecked',
    type: 'Radios',
    desc: '可选radio, 带 checked',
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
    name: 'radiosOptionalCheckable',
    type: 'Radios',
    desc: ' ',
    hideColon: true,
    checkable: true,
    checkableDesc: '可选radio, checkable',
    suffix: '免费赠送',
    suffixClazz: 'text-info',
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
    name: 'radiosOptionalCheckableWithChecked',
    type: 'Radios',
    desc: '可选radio, checkable, checked',
    checkable: true,
    checked: true,
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
    name: 'radiosOptionalCheckableWithDisabled',
    type: 'Radios',
    desc: '可选radio, checkable, disabled',
    checkable: true,
    disabled: true,
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
    name: 'radiosOptionalNumber',
    type: 'Radios',
    desc: '可选radio, 数字',
    list: [
      {
        value: 0,
        desc: '0'
      },
      {
        value: 1,
        desc: '1'
      },
      {
        value: 2,
        desc: '2',
        checked: true
      },
      {
        value: 3,
        desc: '3'
      }
    ]
  },
  {
    name: 'radiosMandatoryEmpty',
    type: 'Radios',
    desc: '必选radio, 空',
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

window.paramList = paramList
