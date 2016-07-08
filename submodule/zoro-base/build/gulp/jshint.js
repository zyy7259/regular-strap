var gulp = require('gulp')
var jshint = require('gulp-jshint')

gulp.task('jshint', function () {
  return gulp.src(require('./jshintSrc'))
                .pipe(jshint())
                .pipe(jshint.reporter('default'))
})
