'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const gp = loadPlugins();

// Копіювання файлів і каталогів
export default () => {
  return gulp.src(path.copy.src)
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: 'Copy',
        message: error.message
      }))
    }))
    .pipe(gp.newer(path.copy.dest))
    .pipe(gulp.dest(path.copy.dest))
    .pipe(browserSync.stream());
};
