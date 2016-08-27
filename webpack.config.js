const config = require('zoro-kit/build/webpack.config.lib.js')({
  output: {
    filename: 'regular-strap.js',
    library: 'RegularStrap'
  }
})

module.exports = config
