'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';
import app from '../config/app.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
const gp = loadPlugins();

import browserSync from 'browser-sync';

// Обробка CSS
export default () => {
  return gulp.src(path.css.src, { sourcemaps: app.isDev })
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: 'CSS',
        message: error.message
      }))
    }))
    .pipe(gp.concat('style.css'))
    .pipe(gp.cssimport())
    .pipe(gp.autoprefixer())
    .pipe(gp.shorthand())
    .pipe(gp.groupCssMediaQueries())
    .pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(gp.rename({ suffix: '.min' }))
    .pipe(gp.size({ title: 'CSS before' }))
    .pipe(gp.csso())
    .pipe(gp.size({ title: 'CSS after' }))
    .pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
}
