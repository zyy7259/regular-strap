/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-22 16:13:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-06-22 16:39:05
*/

module.exports = function (path, stats) {
  // watch 的逻辑是先走 filter, 再用 ignoreDirectoryPattern 来判断
  // 所以 filter 里面只过滤非 JS 文件，对于文件夹来说要返回 true
  if (stats.isFile()) {
    var index = path.lastIndexOf('.')
    var ext = path.slice(index + 1)
    return ext === 'js'
  }
  return true
}
