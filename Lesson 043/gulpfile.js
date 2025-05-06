const gulp = require('gulp');
const imagemin = require('gulp-imagemin');


gulp.task ("images", () => {
    return gulp
    .src('src/images/*')
    .pipe(imagemin(
        { verbose:true }))
    .pipe(gulp.dest('dist/images'));
})