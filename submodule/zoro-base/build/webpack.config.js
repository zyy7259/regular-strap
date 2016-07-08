var path = require('path')

module.exports = {
  entry: {
        // a dependency to an entry point is not allowed before webpack@2.0, use array deps for workaround
    util: ['./src/util']
  },
  output: {
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  }
}
