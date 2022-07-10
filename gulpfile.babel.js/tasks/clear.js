'use strict';

import path from '../config/paths.js';

// Plugins
import del from 'del';

// Видалення каталогу
export default () => {
  return del(path.root);
};
