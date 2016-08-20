var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');
var serve = require('gulp-serve');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');

gulp.task('start', function(done) {
  runSequence('build', 'serve', 
    function() {
      watch(['converttalk.*', 'www/index.html', '!converttalk.build.js', '!converttalk.min.js'], function(){ gulp.start('build'); });
    });
});

gulp.task('serve', serve('www'))

gulp.task('build', function () {
  return gulp.src('converttalk.js')
    .pipe(requirejsOptimize({
      baseUrl: ".",
      mainConfigFile: "config.js",
      name: "lib/almond/almond",
      include: ['converttalk'],
      out: "converttalk.min.js",
      preserveLicenseComments: false,
    }))
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest('./www/widgets'));
});