'use strict';

const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd
  },

  pug: {
    pretty: isDev
  },

  webpack: {
    mode: isProd ? 'production' : 'development'
  },

  imagemin: {
    verbose: true
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg']
  }
}
