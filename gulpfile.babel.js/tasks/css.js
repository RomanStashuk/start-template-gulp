'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';
import app from '../config/app.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const gp = loadPlugins();

// Обробка CSS
export default () => {
  return gulp.src(path.css.src)
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: 'CSS',
        message: error.message
      }))
    }))
    .pipe(gp.if(app.isDev, gp.sourcemaps.init()))
    .pipe(gp.concat('style.css'))
    .pipe(gp.cssimport())
    .pipe(gp.autoprefixer())
    .pipe(gp.shorthand())
    .pipe(gp.groupCssMediaQueries())
    .pipe(gp.if(app.isDev, gp.sourcemaps.write()))
    .pipe(gulp.dest(path.css.dest))
    .pipe(gp.rename({ suffix: '.min' }))
    .pipe(gp.size({ title: 'CSS before' }))
    .pipe(gp.csso())
    .pipe(gp.size({ title: 'CSS after' }))
    .pipe(gp.if(app.isDev, gp.sourcemaps.write()))
    .pipe(gulp.dest(path.css.dest))
    .pipe(browserSync.stream());
};
