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
const beautify = require('gulp-beautify');
const removeEmptyLines = require('gulp-remove-empty-lines');

// Clean assets
function clear() {
  const path = [{ destination: 'dist/*' }];

  for (var i = 0; i < path.length; i++) {
    return src(path[i].destination, {
      read: false,
    }).pipe(clean({ force: true }));
  }
}
function clearHtmlMo() {
  return src('./Mobile/dist/html/*', {
    read: false,
  }).pipe(clean());
}
function clearHtmlTV() {
  return src('./TV/dist/html/*', {
    read: false,
  }).pipe(clean());
}
// coding List CSS function
function codingListCss() {
  const source = './src/codingList.scss';

  return src(source, { sourcemaps: false })
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      })
    )

    .pipe(dest('./codingList/', { sourcemaps: false }))
    .pipe(browsersync.stream());
}

function jsTv() {
  const source = './TV/src/js/common/*.js';

  return src(source).pipe(changed(source)).pipe(dest('./TV/dist/assets/js/common')).pipe(browsersync.stream());
}

// JS function
function jsMobile() {
  const source = './Mobile/src/js/*.js';

  return src(source).pipe(changed(source)).pipe(concat('bundle.js')).pipe(dest('./Mobile/dist/assets/js/')).pipe(browsersync.stream());
}

// library js function
function lib_Mo(done) {
  return src(['./node_modules/jquery/dist/jquery.slim.min.js', './Mobile/src/js/lib/*.*']).pipe(dest('./Mobile/dist/assets/js/lib'));

  done();
}
function lib_TV(done) {
  return src(['./TV/src/js/lib/*.*']).pipe(dest('./TV/dist/assets/js/'));

  done();
}

// CSS function
function cssMobile(done) {
  const source = './Mobile/src/scss/style.scss';

  gulp
    .src(source, { sourcemaps: true })
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      })
    )
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./Mobile/dist/assets/css/', { sourcemaps: true }))
    .pipe(browsersync.stream());
  done();
}
function cssTV(done) {
  const source = './TV/src/scss/style.scss';

  gulp
    .src(source, { sourcemaps: true })
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      })
    )
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./TV/dist/assets/css/', { sourcemaps: true }))
    .pipe(gulp.dest('./TV/old_pub/assets/css/'))
    .pipe(browsersync.stream());
  done();
}

// html function
function htmlMobile(done) {
  return src(['./Mobile/src/html/**/*.*', '!./Mobile/src/html/include/**/*.*'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: './Mobile/src/html/include',
      })
    )
    .pipe(beautify.html({ indent_size: 2 }))
    .pipe(
      removeEmptyLines({
        removeComments: false,
      })
    )
    .pipe(dest('./Mobile/dist/html'));
  done();
}
function htmlTV(done) {
  return src(['./TV/src/html/**/*.*', '!./TV/src/html/include/**/*.*', '!./TV/old_pub/**/*.*'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: './TV/src/html/include',
      })
    )
    .pipe(beautify.html({ indent_size: 2 }))
    .pipe(
      removeEmptyLines({
        removeComments: false,
      })
    )
    .pipe(dest('./TV/dist/'));
  done();
}

// font function
function fontMobile(done) {
  return src(['./Mobile/src/fonts/**/*.*']).pipe(dest('./Mobile/dist/assets/fonts'));
  done();
}
function fontTV(done) {
  return src(['./TV/src/fonts/**/*.*']).pipe(dest('./TV/dist/assets/fonts')).pipe(dest('./TV/old_pub/assets/fonts'));
  done();
}
// function fontTV(done) {
//   return src(["./TV/src/webfonts/**/*.*"])
//     .pipe(dest('./TV/dist/assets/webfonts')
//   );
//   done();
// }

function shareSource(done) {
  const ContentPath = [
    { source: './Mobile/dist/**/*', destination: './shareDist/Mobile/' },
    { source: './TV/dist/**/*', destination: './shareDist/TV/' },
    { source: './TV/old_pub/**/*', destination: './shareDist/TV/old_pub' },
    { source: './codingList/**/*', destination: './shareDist/codingList/' },
    { source: 'index.html', destination: './shareDist/' },
  ];

  for (var i = 0; i < ContentPath.length; i++) {
    gulp.src([ContentPath[i].source]).pipe(gulp.dest(ContentPath[i].destination));
  }

  done();
}

// Watch files
function watchFilesMobile() {
  watch('./src/codingList.scss', codingListCss);
  watch('./Mobile/src/html/**/*.*', series(clearHtmlMo, htmlMobile));
  watch('./Mobile/src/js/*', jsMobile);
  watch('./Mobile/src/scss/**', cssMobile);
}

function watchFilesTV() {
  watch('./src/codingList.scss', codingListCss);
  watch('./TV/src/html/**/*.*', series(clearHtmlTV, htmlTV));
  watch('./TV/src/scss/**', cssTV);
  watch('./TV/src/js/common', jsTv);
}

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './',
    },
    port: 3000,
  });

  watch('./Mobile/**').on('change', reload);
  watch('./TV/**').on('change', reload);
  done();
}

// Tasks to define the execution of the functions simultaneously or in series
exports.mobile = parallel(watchFilesMobile, browserSync);
exports.tv = parallel(watchFilesTV, browserSync);
exports.build = series(clear, parallel(fontMobile, fontTV, cssMobile, cssTV, htmlMobile, htmlTV, lib_Mo, lib_TV, jsMobile, codingListCss));
exports.share = series(clear, parallel(shareSource));
