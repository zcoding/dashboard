var Path       = require('path');
var gulp       = require('gulp');
var sass       = require('gulp-sass');
var rename     = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss  = require('gulp-minify-css');

gulp.task('sass', function() {
  return gulp.src(Path.resolve(__dirname, './src/**/*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(Path.resolve(__dirname, './build/')))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(Path.resolve(__dirname, './build/')));
});

gulp.task('dev', ['sass'], function () {
  gulp.watch(Path.resolve(__dirname, './src/**/*.scss'), ['sass']);
});
