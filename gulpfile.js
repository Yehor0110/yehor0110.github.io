'use strict'

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');


gulp.task('sass', function () {
    gulp.src('src/sass/App.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(gulp.dest('src/styles'))
});

gulp.task('message', async function() {
    console.log("HTTP Server Started");
  });
