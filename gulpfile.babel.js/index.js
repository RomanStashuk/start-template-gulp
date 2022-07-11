'use strict';

import gulp from 'gulp';
import app from './config/app.js';

// Задачі
import html from './tasks/html.js';
import pug from './tasks/pug.js';
import css from './tasks/css.js';
import sass from './tasks/sass.js';
import fonts from './tasks/fonts.js';
import clear from './tasks/clear.js';
import server from './tasks/server.js';
import watcher from './tasks/watch.js';
import images from './tasks/images.js';
import scripts from './tasks/scripts.js';
import copy from './tasks/copy.js';
import zip from './tasks/zip.js';
import lintspaces from './tasks/lintspaces.js';

// Збирання проекту
const build = gulp.series(
  clear,
  gulp.parallel(html, pug, css, sass, copy, fonts, images, scripts)
);

const dev = gulp.series(
  build,
  gulp.parallel(watcher, server)
);

export default app.isProd
  ? build
  : dev;

export {
  html,
  pug,
  css,
  sass,
  copy,
  fonts,
  images,
  scripts,
  zip,
  lintspaces
};
