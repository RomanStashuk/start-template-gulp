'use strict';

const pathSrc = './src';
const pathDest = './build';

export default {
  root: pathDest,

  html: {
    src: pathSrc + '/html/*.html',
    dest: pathDest,
    watch: pathSrc + '/html/**/*.html'
  },

  pug: {
    src: pathSrc + '/pug/*.pug',
    dest: pathDest,
    watch: pathSrc + '/pug/**/*.pug'
  },

  css: {
    src: pathSrc + '/css/*.css',
    dest: pathDest + '/css',
    watch: pathSrc + '/css/**/*.css'
  },

  sass: {
    src: pathSrc + '/sass/*.{sass,scss}',
    dest: pathDest + '/css',
    watch: pathSrc + '/sass/**/*.{sass,scss}'
  },

  js: {
    src: pathSrc + '/js/*.js',
    dest: pathDest + '/js',
    watch: pathSrc + '/js/**/*.js'
  },

  img: {
    src: pathSrc + '/img/**/*.{png,gif,svg,jpg,jpeg}',
    dest: pathDest + '/img',
    watch: pathSrc + '/img/**/*.{png,gif,svg,jpg,jpeg}'
  },

  fonts: {
    src: pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
    dest: pathDest + '/fonts',
    watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}'
  },

  lintspaces: {
    src: [
      '*.json',
      '*.md',
      './gulpfile.babel.js/**/*.js',
      pathSrc + '/html/**/*.html',
      pathSrc + '/pug/**/*.pug',
      pathSrc + '/js/**/*.js',
      pathSrc + '/img/**/*.svg',
      pathSrc + '/css/**/*.css',
      '!' + pathSrc + '/css/base/normalize.css',
      pathSrc + '/sass/**/*.scss',
      '!' + pathSrc + '/sass/base/normalize.scss'
    ]
  },

  copy: {
    src: pathSrc + '/favicon/**/*.*',
    dest: pathDest + '/favicon',
    watch: pathSrc + '/favicon/**/*.*'
  }
};
