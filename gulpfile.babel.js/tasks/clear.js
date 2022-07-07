'use strict';

import path from '../config/paths.js';

// Plugins
import del from 'del';

// Удаленик директории
export default () => {
  return del(path.root);
}
