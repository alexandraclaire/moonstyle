/**
 *
 * Gulpfile setup
 *
 * @since 1.0.0
 * @authors Alex Dunham
 * @package Alex Dunham
 */

// Project configuration
var project = 'Alex Dunham - Portfolio', // Project name, used for build zip.
    url = 'http://localhost/portfolio/index.html', // Local Development URL for BrowserSync. Change as-needed.
    buildInclude = [
        // include common file types
        '**/*.html',
        '**/*.css',
    ];

var gulp = require('gulp');
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {


    gulp.watch("sass/portfolio/*.scss", ['sass']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/portfolio/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("assets/css/"))
});


gulp.task('default', ['serve']);
