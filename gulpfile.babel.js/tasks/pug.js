'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';
import app from '../config/app.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
const gp = loadPlugins();

// Обробка PUG
export default () => {
  return gulp.src(path.pug.src)
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: 'PUG',
        message: error.message
      }))
    }))
    .pipe(gp.pug(app.pug))
    .pipe(gp.webpHtml())
    .pipe(gp.htmlBemValidator())
    .pipe(gulp.dest(path.pug.dest))
    .pipe(browserSync.stream());
};
