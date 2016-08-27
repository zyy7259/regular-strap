const config = require('zoro-kit/build/webpack.config.lib.js')({
  output: {
    filename: 'regular-strap.js',
    library: 'RegularStrap'
  },
  externals: [
    {
      'regularjs': {
        root: 'Regular',
        amd: 'Regular',
        commonjs: 'regularjs',
        commonjs2: 'regularjs'
      }
    }
  ]
})

module.exports = config
