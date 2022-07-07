'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';

import path from './config/paths.js';
import app from './config/app.js';

// Задачи
import pug from './tasks/pug.js';
import clear from './tasks/clear.js';

// Наблюдение
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  });
}

const watcher = () => {
  gulp.watch(path.pug.watch, pug).on('all', browserSync.reload);
}


// Сборка
const build = gulp.series(
  clear,
  gulp.parallel(pug)
);

const dev = gulp.series(
  build,
  gulp.parallel(watcher, server)
);

export { pug };

export default app.isProd
  ? build
  : dev;
