var gulp        = require('gulp'),
    browserify  = require('gulp-browserify'),
    uglify      = require('gulp-uglify');


gulp.task('agenda-js', function(){

  gulp.src('public/js/src/agenda.js')
      .pipe( browserify({ insertGlobals: true }) )
      .pipe( uglify() )
      .pipe( gulp.dest('public/js/dist/') )

});

gulp.task('mycontacts-js', function(){

  gulp.src('public/js/src/mycontacts.js')
      .pipe( uglify() )
      .pipe( gulp.dest('public/js/dist/') )

});

gulp.task('watch', function(){
  gulp.watch('public/js/src/agenda.js', ['agenda-js']);
  gulp.watch('public/js/src/mycontacts.js', ['mycontacts-js']);
});

gulp.task('run', ['watch']);