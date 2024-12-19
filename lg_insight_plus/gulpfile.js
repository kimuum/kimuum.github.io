const gulp = require('gulp');
const { src, dest, parallel, series, watch, lastRun } = require('gulp');

// Load plugins
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const browsersync = require('browser-sync').create();
const reload = browsersync.reload;
const fileinclude = require('gulp-file-include');
const prettyHtml = require('gulp-pretty-html');
const replace = require('gulp-replace');

// Clean assets
function clear() {
  const path = [{ destination: 'dist/*' }];

  for (var i = 0; i < path.length; i++) {
    return src(path[i].destination, {
      read: false,
    }).pipe(clean({ force: true }));
  }
}
function shareClear() {
  const path = [{ destination: 'shareDist/*' }];

  for (var i = 0; i < path.length; i++) {
    return src(path[i].destination, {
      read: false,
    }).pipe(clean({ force: true }));
  }
}
// coding List CSS function
function codingListCss() {
  const source = './src/codingList.scss';

  return src(source, { sourcemaps: true })
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      }),
    )

    .pipe(dest('./codingList/', { sourcemaps: true }))
    .pipe(browsersync.stream());
}

function font() {
  return src(['./src/fonts/**/*.*']).pipe(dest('./dist/assets/fonts'));
}
function js() {
  const source = './src/js/*.js';

  return src(source, { since: gulp.lastRun(js) })
    .pipe(concat('bundle.js'))
    .pipe(dest('./dist/assets/js/'))
    .pipe(browsersync.stream());
}
function lib_js() {
  return src(['./src/js/lib/*.*']).pipe(dest('./dist/assets/js/lib'));
}
function lib_css() {
  return src(['./src/css/lib/*.*']).pipe(dest('./dist/assets/css/lib'));
}
function css() {
  const source = './src/scss/style.scss';

  return gulp
    .src(source, { sourcemaps: true }, { since: gulp.lastRun(css) })
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/assets/css/', { sourcemaps: true }))
    .pipe(browsersync.stream());
}
function images() {
  return src(['./src/images/**']).pipe(imagemin()).pipe(dest('./dist/assets/images'));
}
function clearHtml() {
  return src('./dist/html/*', {
    read: false,
  }).pipe(clean());
}
function html() {
  return src(['./src/html/**/*.*', '!./src/html/component/**/*.*'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: './src/html/component',
      }),
    )
    .pipe(replace('<!-- prettier-ignore -->', ''))
    .pipe(
      prettyHtml({
        indent_size: 2,
        indent_char: ' ',
        unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br'],
      }),
    )
    .pipe(dest('./dist/html'));
}
function share(done) {
  const ContentPath = [
    { source: './dist/**/*', destination: './shareDist/dist/' },
    { source: './codingList/**/*', destination: './shareDist/codingList/' },
    { source: 'index.html', destination: './shareDist/' },
  ];

  for (var i = 0; i < ContentPath.length; i++) {
    gulp.src([ContentPath[i].source]).pipe(gulp.dest(ContentPath[i].destination));
  }

  done();
}
// Watch files
function watchFiles() {
  watch('./src/codingList.scss', codingListCss);
  watch('./src/scss/**', css);
  watch('./src/js/**', series(js, lib_js));
  watch('./src/images/**', images);
  watch('./src/html/**/*.*', series(clearHtml, html));
}
// BrowserSync
function browserSync() {
  browsersync.init({
    server: {
      baseDir: './',
    },
    port: 3000,
  });

  watch('./src/**').on('change', reload);
}

// Tasks to define the execution of the functions simultaneously or in series
exports.image = series(images);
exports.watch = parallel(watchFiles, browserSync);
exports.build = series(clear, parallel(font, html, css, lib_js, lib_css, js, images));
exports.share = series(shareClear, parallel(share));
