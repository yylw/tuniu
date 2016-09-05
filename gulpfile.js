var gulp = require('gulp');
var scss = require('gulp-sass');
var browsersync= require('browser-sync').create();
var reload = browsersync.reload;

gulp.task('start',['sass'],function() {
	browsersync.init({
		server:{baseDir:'./'},
		startPath:'src/html/index.html'
	});

	gulp.watch('src/scss/*.scss',['sass']);
	gulp.watch('src/html/*.html').on('change',reload);
	gulp.watch('src/js/*.js').on('change',reload);
	gulp.watch('src/img/*.jpg').on('change',reload);
	gulp.watch('src/img/*.png').on('change',reload);
	gulp.watch('src/img/*.gif').on('change',reload);
});

gulp.task('sass',function(){
	gulp.src('src/scss/main.scss')
	.pipe(scss())	
	.on('error',function(err){
            console.log(err.message);
        })
	.pipe(gulp.dest('src/css'))
	.pipe(reload({stream:true}))
});