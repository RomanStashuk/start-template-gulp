'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';
import app from '../config/app.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
const gp = loadPlugins();

import browserSync from 'browser-sync';

import dartSass from 'sass';
const sassPlugin = gp.sass(dartSass);

// Обрdбка SASS/SCSS
export default () => {
  return gulp.src(path.sass.src, { sourcemaps: app.isDev })
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: 'SASS',
        message: error.message
      }))
    }))
    .pipe(gp.sassGlob())
    .pipe(sassPlugin())
    .pipe(gp.autoprefixer())
    .pipe(gp.shorthand())
    .pipe(gp.groupCssMediaQueries())
    .pipe(gulp.dest(path.sass.dest, { sourcemaps: app.isDev }))
    .pipe(gp.rename({ suffix: '.min' }))
    .pipe(gp.size({ title: 'CSS before' }))
    .pipe(gp.csso())
    .pipe(gp.size({ title: 'CSS after' }))
    .pipe(gulp.dest(path.sass.dest, { sourcemaps: app.isDev }))
    .pipe(browserSync.stream());
}
