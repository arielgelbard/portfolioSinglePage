
// ------------------------------------
// Libraries
// ------------------------------------

var fs        = require('fs');
var gulp      = require('gulp');
// var sass      = require('gulp-sass');
var less      = require('gulp-less');
var jade      = require('gulp-jade');
var imagemin  = require('gulp-imagemin');
var rename    = require('gulp-rename');

// ------------------------------------
// Paths
// ------------------------------------

var paths     = {
  fonts      : './src/assets/fonts/**/*',
  styles      : './src/assets/styles/**/*.less',
  scripts     : './src/assets/scripts/**/*.js',
  images      : './src/assets/images/**/*.{png,gif,jpeg,jpg,svg}',
  templates   : './src/**/*.jade',
  other       : './src/assets/*.pdf'
};

// ------------------------------------
// Default Task
// ------------------------------------

gulp.task('default', ['images', 'scripts', 'fonts', 'styles', 'templates']);

// ------------------------------------
// Watch Task
// ------------------------------------

gulp.task('watch', function() {

  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.templates, ['templates']);

});

// ------------------------------------
// Styles Task
// ------------------------------------

gulp.task('styles', function() {

  gulp.src('./src/assets/styles/index.less')
    // .pipe(sass({ errLogToConsole: true, sourceComments : 'normal' }))
    .pipe(less())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./public/assets/styles/'))
  
  gulp.src('./src/assets/styles/reset2.css')
    .pipe(gulp.dest('./public/assets/styles/'))

});

// ------------------------------------
// Fonts Task
// ------------------------------------
gulp.task('fonts', function() {

  gulp.src(paths.fonts)
    .pipe(gulp.dest('./public/assets/fonts/'))

});

// ------------------------------------
// Scripts Task
// ------------------------------------

gulp.task('scripts', function() {

  gulp.src(paths.scripts)
    .pipe(gulp.dest('./public/assets/scripts/'))

});

// ------------------------------------
// Images Task
// ------------------------------------

gulp.task('images', function() {

  gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest('./public/assets/images/'))

  gulp.src(paths.other)
    .pipe(gulp.dest('./public/assets/'))

});

// ------------------------------------
// Templates Task
// ------------------------------------

gulp.task('templates', function() {

  gulp.src(paths.templates)
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('./public/'))

});


