'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var validate = require('gulp-w3c-css');
var htmlhint = require("gulp-htmlhint");
var babel = require('gulp-babel');
var beautify = require('gulp-beautify');
var about = require('gulp-about');
var cat  = require('gulp-cat');
var color = require('gulp-color');




gulp.task('sass', function() {
    return gulp.src('./assets/sass/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./assets/css'));
  });

  gulp.task('watch', function () {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
  });


  
 gulp.task('validate', function(){
     return gulp.src('./assets/css/*.css')
    .pipe(validate())
    .pipe(gulp.dest('./assets/css/output/'));
 })

 gulp.task('htmlhint', function(){
     return gulp.src('./*.html')
     .pipe(htmlhint())
     .pipe(htmlhint.reporter())
 })

 gulp.task('babel', function(){
    return gulp.src('./assets/js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./assets/js/output/'))
 })

 gulp.task('beautify', function(){
     return gulp.src('./assets/js/*.js')
     .pipe(beautify({indent_size: 2}))
     .pipe(gulp.dest('./assets/js/beauty/'))
 })

 gulp.task('about', function(){
     return gulp.src('package.json')
     .pipe(about())
     .pipe(gulp.dest('./mainoutput'))
 })

 gulp.task('cat', function(){
    return gulp.src('package.json')
    .pipe(cat())
})

gulp.task('color', function () {
    console.log(color('Hello World!', 'RED'));
});





  gulp.task('csstasks', ['sass', 'watch', 'validate']);

  gulp.task('jstasks', ['babel', 'beautify']);

  gulp.task('htmltasks', ['htmlhint']);

  gulp.task('default', ['csstasks', 'jstasks', 'htmltasks', 'about', 'cat', 'color']);