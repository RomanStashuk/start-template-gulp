'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';
import app from '../config/app.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const gp = loadPlugins();

// Обрoбка зображень
export default () => {
  return gulp.src(path.img.src)
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: 'Images',
        message: error.message
      }))
    }))
    .pipe(gp.newer(path.img.dest))
    .pipe(gp.webp())
    .pipe(gulp.dest(path.img.dest))
    .pipe(gulp.src(path.img.src))
    .pipe(gp.newer(path.img.dest))
    .pipe(gp.if(app.isProd, gp.imagemin([
      gp.imagemin.gifsicle({ interlaced: true }),
      gp.imagemin.optipng({ optimizationLevel: 5 }),
      gp.imagemin.mozjpeg({
        quality: 85,
        progressive: true
      }),
      gp.imagemin.svgo({
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false },
          { removeTitle: true },
          { removeHiddenElems: false },
          { cleanupNumericValues: { floatPrecision: 1 } }
        ]
      })
    ])))
    .pipe(gulp.dest(path.img.dest))
    .pipe(browserSync.stream());
};
