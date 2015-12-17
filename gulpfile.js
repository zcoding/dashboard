var Path       = require('path');
var gulp       = require('gulp');
var sass       = require('gulp-sass');
var rename     = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss  = require('gulp-minify-css');
var babel      = require('gulp-babel');
var Concat     = require('gulp-concat');
var Uglify     = require('gulp-uglify');

gulp.task('sass', function() {
  return gulp.src(Path.resolve(__dirname, './src/**/*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(Path.resolve(__dirname, './build/')))
    .pipe(gulp.dest(Path.resolve(__dirname, './examples-react/public/lib/dashboard/')))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(Path.resolve(__dirname, './build/')))
    .pipe(gulp.dest(Path.resolve(__dirname, './examples-react/public/lib/dashboard/')));
});

gulp.task('dev', ['sass', 'js'], function () {
  gulp.watch(Path.resolve(__dirname, './src/**/*.scss'), ['sass']);
  gulp.watch(Path.resolve(__dirname, './js/**/*.js'), ['js']);
});

gulp.task('js', function() {
  return gulp.src(Path.resolve(__dirname, './js/**/*.js'))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(Concat('dashboard.js'))
    .pipe(gulp.dest(Path.resolve(__dirname, './build/js/')))
    .pipe(Uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(Path.resolve(__dirname, './build/js/')));
});
