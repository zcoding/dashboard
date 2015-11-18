var gulp = require('gulp');
var stylus = require('gulp-stylus');
var path = require('path');

gulp.task('stylus', function () {
  return gulp.src('./src/dashboard.styl', {cwd: __dirname})
    .pipe(stylus())
    .pipe(gulp.dest('./build', {cwd: __dirname}));
});

gulp.task('dev', ['stylus'], function() {
  gulp.watch(path.resolve(__dirname, './src/**/*.styl'), ['stylus']);
});
