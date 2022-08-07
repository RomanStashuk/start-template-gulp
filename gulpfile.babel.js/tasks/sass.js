'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';
import app from '../config/app.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import dartSass from 'sass';

const gp = loadPlugins();
const sassPlugin = gp.sass(dartSass);

// Обрdбка SASS/SCSS
export default () => {
  return gulp.src(path.sass.src)
    .pipe(gp.if(app.isDev, gp.sourcemaps.init()))
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
    .pipe(gulp.dest(path.sass.dest))
    .pipe(gp.rename({ suffix: '.min' }))
    .pipe(gp.size({ title: 'CSS before' }))
    .pipe(gp.csso())
    .pipe(gp.size({ title: 'CSS after' }))
    .pipe(gp.if(app.isDev, gp.sourcemaps.write('.')))
    .pipe(gulp.dest(path.sass.dest))
    .pipe(browserSync.stream());
};
