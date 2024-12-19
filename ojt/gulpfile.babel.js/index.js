'use strict';
const {series, parallel } = require('gulp');
const { cloneRoot, cloneFontFolder, cloneJS } = require('./clone');
const { swipeDist } = require('./swipe');
const { setting } = require('./project');
const { minifyJS } = require('./js');
const { concatLibsCSS, compileSCSS } = require('./css');
const { setHTML, generateHTML } = require('./html');
const { watchingResources, launchServer } = require('./server');
const { sourceDeploy } = require('./deploy');

const build = series(
  swipeDist,
  parallel(cloneRoot, cloneFontFolder, cloneJS, concatLibsCSS, setHTML),
  generateHTML,
  minifyJS,
  compileSCSS
);

const defaultTask = series(build, watchingResources, launchServer);
const deploy = series(build, sourceDeploy);

module.exports = {
  cloneRoot,
  setting,
  build,
  default: defaultTask,
  deploy
};