'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';

import path from './config/paths.js';
import app from './config/app.js';

// Задачі
import html from './tasks/html.js';
import pug from './tasks/pug.js';
import clear from './tasks/clear.js';
import server from './tasks/server.js';

// Наблюдение
const watcher = () => {
  gulp.watch(path.html.watch, html).on('all', browserSync.reload);
  gulp.watch(path.pug.watch, pug).on('all', browserSync.reload);
}


// Збирання проекту
const build = gulp.series(
  clear,
  gulp.parallel(html, )
);

const dev = gulp.series(
  build,
  gulp.parallel(watcher, server)
);

export {
  html,
  pug
};


export default app.isProd
  ? build
  : dev;
