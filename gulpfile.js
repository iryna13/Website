var gulp = require('gulp');
var server = require('gulp-server-livereload');
var uncss = require('gulp-uncss');
var csso = require('gulp-csso');
var prefix = require('gulp-autoprefixer');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cleanDest = require('gulp-clean-dest');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');

//SERVER	
gulp.task('serv', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      defaultFile: './index.html',
      open: true
    }));
});

//STYLES

gulp.task('less', function () {
  return gulp.src('./src/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('../dist/css'));
});



//IMAGES
gulp.task('images', function () {
    return gulp.src('./src/img/**/*')
        .pipe(imagemin({
          progressive: true
        }))
        .pipe(gulp.dest('dist/img'));
});

//VIEWS
gulp.task('views', function () {
    return gulp.src('./src/views/**/*.html')
        .pipe(gulp.dest('dist/views'));
});

//BUILD
gulp.task('build', ['images', 'views'] ,function () {
    return gulp.src('./src/**/*.html')
        .pipe(cleanDest('dist'))
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', csso()))
        .pipe(gulp.dest('dist'));
});

//IMAGES
gulp.task('js', function () {
    return gulp.src('./src/js/**/*')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('dist/js'));
});


//WATCHER
gulp.task('watch', function () {
	gulp.watch('./src/less/**/*.less', ['less']);
  gulp.watch('./src/views/**/*.html', ['views']);
  gulp.watch('./src/views/**/*.jade', ['templates']);
  gulp.watch('./src/js/**/*', ['js']);
  gulp.watch('./src/img/**/*', ['images']);
});

gulp.task('default', ['serv', 'watch' ]);