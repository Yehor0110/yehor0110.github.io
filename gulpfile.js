"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
// var fontweights = require('css-font-weight-names');
// console.dir(fontweights);

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/css/style.scss',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

gulp.task('styles',function () {
    gulp.src('sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('build/css'))
        .pipe(rename('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream())
});

gulp.task('scripts', function () {
    gulp.src(['./js/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(minify())
        .pipe(gulp.dest('build/js'))
});

gulp.task('watch', ['styles', 'scripts'], function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./css/**/*.scss", ['styles']);
    gulp.watch("./js/**/*.js", ['scripts']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task("img", function () {
    gulp.src("./img/**/*")
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 10
        }))
        .pipe(gulp.dest("./build/img"))
});
// в консоли запустить команду gulp watch{png,jpg,jpeg,gif,svg}