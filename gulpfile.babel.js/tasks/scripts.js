'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';
import app from '../config/app.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
const gp = loadPlugins();

import browserSync from 'browser-sync';
import webpack from 'webpack-stream';

// Обрoбка JS
export default () => {
  return gulp.src(path.js.src, { sourcemaps: app.isDev })
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: 'JS',
        message: error.message
      }))
    }))
    .pipe(gp.babel())
    .pipe(webpack(app.webpack))
    .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }))
    .pipe(browserSync.stream());
}
