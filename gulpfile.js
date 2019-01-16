var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');

gulp.task('pug', () => {
  return gulp.src(['./src/pug/**/*.pug', '!./src/pug/**/_*.pug'])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('stylus', function() {
    gulp.src('src/stylus/*')
      .pipe(stylus())
      .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', function(){
	gulp.watch('./src/stylus/**/*.styl', ['stylus']);
	gulp.watch(['./src/pug/**/*.pug'], ['pug']);
});
