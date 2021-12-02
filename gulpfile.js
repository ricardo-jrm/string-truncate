import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import terser from 'gulp-terser';
import concat from 'gulp-concat';

const { src, dest, series } = gulp;

const bundleJS = () =>
  src('dist/index.js')
    .pipe(sourcemaps.init())
    .pipe(concat('index.min.js'))
    .pipe(
      terser({
        toplevel: true,
      }),
    )
    .pipe(sourcemaps.write('./'))
    .pipe(dest('dist'));

export default series(bundleJS);
