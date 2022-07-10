'use strict';

import path from '../config/paths.js';

import browserSync from 'browser-sync';

// Сервер
export default () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  });
};
