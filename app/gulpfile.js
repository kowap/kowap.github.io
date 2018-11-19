let gulp = require('gulp'),
    minify = require('gulp-minify'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    prefix = require('gulp-autoprefixer');

gulp.task('compress', function() {
    gulp.src(['js/*.js'])
        .pipe(minify({
            ext:{
                min:'.min.js'
            }
        }))
        .pipe(gulp.dest('../dist/js'))
});

gulp.task('styles', function(){
    return gulp.src(['Skeleton/css/*.css', 'css/*.css'])
        .pipe(prefix('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('../dist/css'))
});


gulp.task('default', function(){
    gulp.run('styles');
    gulp.run('compress');
    // Other watchers
});

gulp.task('default', function () {
    gulp.watch(['js/*.js'], ['compress']);
    gulp.watch(['Skeleton/css/*.css', 'css/*.css'], ['styles']);
});
