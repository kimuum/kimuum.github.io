const gulp = require('gulp');
const { src, dest, parallel, series, watch } = require('gulp');

// Load plugins

const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();
const reload = browsersync.reload;
const fileinclude = require('gulp-file-include');
const prettyHtml = require('gulp-pretty-html');
const replace = require('gulp-replace');
const removeEmptyLines = require('gulp-remove-empty-lines');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

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

// User
function fontUser(done) {
  return src(['./src/fonts/**/*.*']).pipe(dest('./dist/user/assets/fonts'));
  done();
}
function jsUser() {
  const source = './src/user/js/*.js';

  return src(source).pipe(changed(source)).pipe(concat('bundle.js')).pipe(dest('./dist/user/assets/js/')).pipe(browsersync.stream());
}
function ShareJs() {
  const source = './src/user/js/*.js';

  return src(source).pipe(changed(source)).pipe(uglify()).pipe(concat('bundle.js')).pipe(dest('./dist/user/assets/js/')).pipe(browsersync.stream());
}
function lib_js_User(done) {
  return src(['./src/user/js/lib/*.*']).pipe(dest('./dist/user/assets/js/lib'));

  done();
}
function lib_css_User(done) {
  return src(['./src/user/css/lib/*.*']).pipe(dest('./dist/user/assets/css/lib'));

  done();
}
function cssUser() {
  const source = './src/user/scss/style.scss';

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
    .pipe(gulp.dest('./dist/user/assets/css/', { sourcemaps: true }))
    .pipe(browsersync.stream());
}
function ShareCss() {
  const source = './src/user/scss/style.scss';

  return gulp
    .src(source, { sourcemaps: true })
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(cleanCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/user/assets/css/', { sourcemaps: true }))
    .pipe(browsersync.stream());
}
function imagesUser() {
  return src(['./src/user/images/**']).pipe(imagemin()).pipe(dest('./dist/user/assets/images'));
}
function fileUser() {
  return src(['./src/user/file/**', './src/user/images/main/*.mp4']).pipe(dest('./dist/user/assets/file'));
}
function clearHtmlUser() {
  return src('./dist/user/html/*', {
    read: false,
  }).pipe(clean());
}
function htmlUser(done) {
  return src(['./src/user/html/**/*.*', '!./src/user/html/component/**/*.*', '!./src/user/html/block/**'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: './src/user/html/component',
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
    .pipe(
      removeEmptyLines({
        removeComments: false,
      }),
    )
    .pipe(dest('./dist/user/html'));
  done();
}

// Admin
function fontAdmin(done) {
  return src(['./src/fonts/**/*.*']).pipe(dest('./dist/admin/assets/fonts'));
  done();
}
function jsAdmin() {
  const source = './src/admin/js/*.js';

  return src(source).pipe(changed(source)).pipe(concat('bundle.js')).pipe(dest('./dist/admin/assets/js/')).pipe(browsersync.stream());
}
function lib_js_Admin(done) {
  return src(['./src/admin/js/lib/*.*']).pipe(dest('./dist/admin/assets/js/lib'));

  done();
}
function cssAdmin() {
  const source = './src/admin/scss/style.scss';

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
    .pipe(gulp.dest('./dist/admin/assets/css/', { sourcemaps: true }))
    .pipe(browsersync.stream());
}
function imagesAdmin() {
  return src('./src/admin/images/**').pipe(imagemin()).pipe(dest('./dist/admin/assets/images'));
}
function clearHtmlAdmin() {
  return src('./dist/admin/html/*', {
    read: false,
  }).pipe(clean());
}
function htmlAdmin(done) {
  return src(['./src/admin/html/**/*.*', '!./src/admin/html/component/**/*.*'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: './src/admin/html/component',
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
    .pipe(
      removeEmptyLines({
        removeComments: false,
      }),
    )
    .pipe(dest('./dist/admin/html'));
  done();
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
}
function watchFilesUser() {
  watch('./src/user/scss/**', cssUser);
  watch('./src/user/js/**', jsUser);
  watch('./src/user/images/**', imagesUser);
  watch('./src/user/html/**/*.*', series(clearHtmlUser, htmlUser));
}
function watchFilesAdmin() {
  watch('./src/admin/scss/**', cssAdmin);
  watch('./src/admin/js/*', jsAdmin);
  watch('./src/admin/images/**', imagesAdmin);
  watch('./src/admin/html/**/*.*', series(clearHtmlAdmin, htmlAdmin));
}

// BrowserSync
function browserSync() {
  browsersync.init({
    server: {
      baseDir: './',
    },
    port: 3000,
  });

  watch('./src/user/**').on('change', reload);
  watch('./src/admin/**').on('change', reload);
}

function browserSyncHtwo() {
  browsersync.init({
    server: {
      baseDir: './htwo',
    },
    port: 3000,
  });

  // watch('./src/user/**').on('change', reload);
  // watch('./src/admin/**').on('change', reload);
}

// Tasks to define the execution of the functions simultaneously or in series

exports.clear = series(clear);
exports.image = series(imagesUser);
exports.file = series(fileUser);
exports.user = parallel(watchFilesUser, watchFiles, browserSync);
exports.admin = parallel(watchFilesAdmin, watchFiles, browserSync);
exports.build = series(parallel(fontUser, htmlUser, cssUser, lib_js_User, lib_css_User, jsUser, fileUser, codingListCss));
exports.share = series(parallel(fontUser, htmlUser, ShareCss, ShareJs, lib_css_User, lib_js_User, fileUser, codingListCss, imagesUser));
exports.htwo = series(browserSyncHtwo);
