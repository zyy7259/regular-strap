var gulp = require('gulp')

require('./build/gulp/jshint')
require('./build/gulp/webpack')
// require('./build/gulp/karma');

gulp.task('watch', ['jshint', 'webpack'], function () {
  gulp.watch(require('./build/gulp/jshintSrc'), ['jshint'])
  gulp.watch(['./src/**/*.js'], ['webpack'])
})

gulp.task('default', ['watch'])
