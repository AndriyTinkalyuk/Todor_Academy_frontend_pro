import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

const paths = {
  images: {
    src: 'src/images/*',
    dest: 'build/img/'
  }
}

export default function images() {
  return gulp.src(paths.images.src, {since: gulp.lastRun(images)})
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}
