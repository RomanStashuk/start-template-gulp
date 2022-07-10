'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';
import app from '../config/app.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const gp = loadPlugins();

// Обробка HTML
export default () => {
  return gulp.src(path.html.src)
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: 'HTML',
        message: error.message
      }))
    }))
    .pipe(gp.fileInclude())
    .pipe(gp.webpHtml())
    .pipe(gp.size({ title: 'HTML before' }))
    .pipe(gp.htmlmin(app.htmlmin))
    .pipe(gp.size({ title: 'HTML after' }))
    .pipe(gp.htmlBemValidator())
    .pipe(gulp.dest(path.html.dest))
    .pipe(browserSync.stream());
};
