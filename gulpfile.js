var gulp         = require('gulp');
var del          = require('del');
var runSequence  = require('run-sequence');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var concat       = require('gulp-concat');
var rename       = require('gulp-rename');
var sass         = require('gulp-sass');
var autoprefixer = require("gulp-autoprefixer");
var cssmin       = require('gulp-cssmin');
var uglify       = require('gulp-uglify');

gulp.task('default', function(){
  //
});

gulp.task('watch', function(){
  gulp.watch(['source/stylesheets/**/*.sass'], ['css.sass']);
  gulp.watch(['source/javascripts/**/*.js'], ['js.concat']);
});

gulp.task('build', function(callback){
  return runSequence(
    ['css.sass', 'js.concat'],
    ['css.cssmin', 'js.uglify'],
    'clean',
    callback
  );
});

// --------------------------------------------------
// css
// --------------------------------------------------
gulp.task('css.sass', function(){
  return gulp.src([
    'source/stylesheets/initialize/**/!(_)*.sass',
    'source/stylesheets/foundation/**/!(_)*.sass',
    'source/stylesheets/user/**/!(_)*.sass'
  ])
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(concat('all.sass'))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename('all.css'))
    .pipe(gulp.dest('source/stylesheets'));
});

gulp.task('css.cssmin', function(){
  return gulp.src('source/stylesheets/*.css')
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(cssmin())
    .pipe(gulp.dest('build/stylesheets'));
});

// --------------------------------------------------
// js
// --------------------------------------------------
gulp.task('js.concat', function(){
  return gulp.src([
    'source/javascripts/library/**/!(_)*.js',
    'source/javascripts/module/**/!(_)*.js',
    'source/javascripts/user/**/!(_)*.js',
   ])
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('source/javascripts'))
});

gulp.task('js.uglify', function(){
  return gulp.src('source/javascripts/*.js')
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(uglify())
    .pipe(gulp.dest('build/javascripts'))
});

// --------------------------------------------------
// utility
// --------------------------------------------------
gulp.task('clean', function(callback){
  return del(
    ['.tmp/', '.sass-cache/'],
    callback
  )
});
