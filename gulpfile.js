/**
 * gulp plugins
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
/**
 * other plugins
 */
var del = require('del');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');


gulp.task('js', function () {
  return gulp.src('src/scripts/**.js')
    .pipe(plumber())
    .pipe(concat('bundle.min.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('scss', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('htdocs', function () {
  return gulp.src('src/htdocs/**/*.html')
    .pipe(gulp.dest('public'));
});

gulp.task('build', function (callback) {
  return runSequence(
    'clean',
    ['scss', 'js', 'htdocs'],
    callback
  )
});

gulp.task('server:init', function () {
  return browserSync.init({
    server: {
      baseDir: "./public/"
    }
  });
});

gulp.task('server:reload', function () {
  return browserSync.reload();
});

gulp.task('watch', function () {
  gulp.watch('src/htdocs/**/*.html', ['htdocs', 'server:reload']);
  gulp.watch('src/scripts/**/*.js', ['js', 'server:reload']);
  gulp.watch('src/scss/**/*.scss', ['scss', 'server:reload']);
});

gulp.task('develop',function (callback) {
  return runSequence(
    'build',
    'server:init',
    'watch'
  )
});

gulp.task('clean', function () {
  return del(['public/**/*.html', 'public/js/*', 'public/css/*']);
});