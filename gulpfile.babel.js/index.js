'use strict';

import gulp from 'gulp';

import path from './config/paths.js';
import app from './config/app.js';

// Задачі
import html from './tasks/html.js';
import pug from './tasks/pug.js';
import css from './tasks/css.js';
import sass from './tasks/sass.js';
import clear from './tasks/clear.js';
import server from './tasks/server.js';
import watcher from './tasks/watch.js';

// Збирання проекту
const build = gulp.series(
  clear,
  gulp.parallel(html, sass)
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
  sass
};
