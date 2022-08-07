'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';
import app from '../config/app.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';

const gp = loadPlugins();

// Обрoбка JS
export default () => {
  return gulp.src(path.js.src)
    .pipe(gp.if(app.isDev, gp.sourcemaps.init()))
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: 'JS',
        message: error.message
      }))
    }))
    .pipe(gp.babel())
    .pipe(webpack(app.webpack))
    .pipe(gp.if(app.isDev, gp.sourcemaps.write('.')))
    .pipe(gulp.dest(path.js.dest))
    .pipe(browserSync.stream());
};
