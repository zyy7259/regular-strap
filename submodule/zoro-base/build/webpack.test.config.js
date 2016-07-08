var path = require('path')

module.exports = {
  entry: 'test/unit/specs/index.js',
  output: {
    path: path.resolve('test/unit'),
    filename: 'specs.js'
  },
  resolve: {
    root: [
      path.resolve('.'),
      path.resolve('src')
    ]
  },
  devServer: {
    contentBase: './test/unit',
    noInfo: true
  },
  devtool: '#source-map'
}
