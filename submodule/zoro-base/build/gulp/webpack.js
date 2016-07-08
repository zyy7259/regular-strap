var gulp = require('gulp')
var webpack = require('webpack')
var webpackStream = require('webpack-stream')
var webpackConfig = require('../webpack.config.js')

var distDir = './dist/'

gulp.task('webpack', function () {
  gulp.src('./index.js')
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest(distDir))
})
