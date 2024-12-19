const gulp = require('gulp');
const { src, dest, parallel, series, watch } = require('gulp');

// Load plugins

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();
const reload = browsersync.reload;
const cleanCSS = require('gulp-clean-css');
const fileinclude = require('gulp-file-include');
const prettyHtml = require('gulp-pretty-html');
const replace = require('gulp-replace');
// Clean assets

function clear() {
  return src('./dist/assets/*', {
    read: false,
  }).pipe(clean());
}

function clearHtml() {
  return src('./dist/html/*', {
    read: false,
  }).pipe(clean());
}

function clearindexHtml() {
  return src('./dist/index.html', {
    read: false,
  }).pipe(clean());
}

// JS function
function js() {
  const source = './src/js/*.*';

  return src(source).pipe(changed(source)).pipe(dest('./dist/assets/js/')).pipe(browsersync.stream());
}

// CSS function
function css() {
  const source = './src/scss/style.scss';

  return gulp
    .src(source, { sourcemaps: true })
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

// Optimize images
function images() {
  return (
    src('./src/images/**')
      // .pipe(imagemin())
      .pipe(dest('./dist/assets/images'))
  );
}

// index html function
function indexHtml(done) {
  return src(['./src/html/index/*.*'])
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
    .pipe(dest('./dist'));
  done();
}

// html function
function html(done) {
  return src(['./src/html/**/*.*', '!./src/html/component/**/*.*', '!./src/html/index/*.*'])
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
  done();
}

// font function
function font(done) {
  return src(['./src/fonts/**/*.*']).pipe(dest('./dist/assets/fonts'));
  done();
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

// Watch files
function watchFiles() {
  watch('./src/codingList.scss', codingListCss);
  watch('./src/scss/**', css);
  watch('./src/js/**', js);
  watch('./src/images/**', images);
  watch('./src/html/**/*.*', series(clearHtml, html));
  watch('./src/html/index/*.*', series(clearindexHtml, indexHtml));
}

// BrowserSync

function browserSync() {
  browsersync.init({
    server: {
      baseDir: './',
    },
    port: 3000,
  });

  watch('./src/html/**').on('change', reload);
}

// Tasks to define the execution of the functions simultaneously or in series
exports.watch = parallel(watchFiles, browserSync);
exports.build = series(clear, parallel(indexHtml, html, js, css, font, images));
