var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var browserSync =require('browser-sync');

gulp.task('pug', () => {
  return gulp.src(['./pug/**/*.pug', '!./pug/**/_*.pug'])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./html/'));
});

gulp.task('stylus', function() {
    gulp.src('stylus/*')
      .pipe(stylus())
      .pipe(gulp.dest('css/'));
});

gulp.task('default', ['browser-sync']);

gulp.task('browser-sync', function() {
	browserSync({
	    server: {
		 baseDir: "./"  //対象ディレクトリ
		,index  : "./html/index.html"  //インデックスファイル
	    }
	});
    });

    gulp.task('bs-reload', function () {
	browserSync.reload();
    });

    gulp.task('default', ['browser-sync'], function () {
	gulp.watch("./**/*.html", ['bs-reload']);
	gulp.watch("./**/*.css", ['bs-reload']);
	gulp.watch("./**/*.js", ['bs-reload']);
    });

gulp.task('watch', function(){
	gulp.watch('./stylus/**/*.styl', ['stylus']);
	gulp.watch(['./pug/**/*.pug'], ['pug']);
});

gulp.task('all', ['default', 'watch']);

