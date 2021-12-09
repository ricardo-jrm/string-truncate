const gulp = require('gulp');
const browserify = require('browserify');
const log = require('gulplog');
const tap = require('gulp-tap');
const buffer = require('gulp-buffer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const babelify = require('babelify');
const concat = require('gulp-concat');

const { task, src, dest } = gulp;

task('default', () =>
  src('out/index.js', { read: false })
    .pipe(
      tap(function (file) {
        log.info('bundling ' + file.path);

        file.contents = browserify(file.path, { debug: true })
          .transform(babelify, {
            presets: ['@babel/preset-env'],
          })
          .bundle();
      }),
    )
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(concat('index.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(dest('dist')),
);
