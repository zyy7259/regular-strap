/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-13T17:13:00+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-13T17:24:44+08:00
*/

Regular.filter('parseUrl', (() => {
  const reg = /http(?:s?):\/\/.*?(?=\s|$)/
  return (value, clazz) => {
    clazz = clazz || 'primary'
    return value.replace(reg, `<a href="$&" class="text-${clazz}" target="_blank">$&</a>`)
  }
})())
