'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';

const gp = loadPlugins();

export default (cb) => {
  gulp.src(path.lintspaces.src)
    .pipe(gp.lintspaces({ editorconfig: '.editorconfig' }))
    .pipe(gp.lintspaces.reporter());
  cb();
};
