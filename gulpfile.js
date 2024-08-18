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
  return (
    src(['./src/html/**/*.*', '!./src/html/component/**/*.*'])
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
      // 2개이상의 개행을 하나의 개행으로 변경
      .pipe(replace(/(\r\n|\r|\n){2,}/g, '\r\n', { skipBinary: true }))
      .pipe(
        // 클래스 빈 공간 제거
        replace(/class="([^"]*)"/g, function (match, p1) {
          const cleanedClasses = p1.replace(/\s+/g, ' ').trim();
          return `class="${cleanedClasses}"`;
        }),
      )
      .pipe(
        // 주석 처리
        replace(/<!--([\s\S]*?)-->/g, function (match, p1) {
          // 주석 내부에 HTML 태그가 있는지 확인
          const hasHtmlTag = /<[a-z][\s\S]*>/i.test(p1);

          // 주석 내부에 HTML 태그가 있으면 주석 그대로 반환, 아니면 정리 진행
          if (hasHtmlTag) {
            return match;
          } else {
            const cleanedComment = p1.replace(/\s+/g, ' ').trim();
            return `<!-- ${cleanedComment} -->`;
          }
        }),
      )
      .pipe(dest('./dist/html'))
  );
}
function clearHtmlIndex() {
  return src('./dist/index.html', {
    read: false,
  }).pipe(clean());
}
function htmlIndex() {
  return (
    src('./src/index.html')
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
      // 2개이상의 개행을 하나의 개행으로 변경
      .pipe(replace(/(\r\n|\r|\n){2,}/g, '\r\n', { skipBinary: true }))
      .pipe(
        // 클래스 빈 공간 제거
        replace(/class="([^"]*)"/g, function (match, p1) {
          const cleanedClasses = p1.replace(/\s+/g, ' ').trim();
          return `class="${cleanedClasses}"`;
        }),
      )
      .pipe(
        // 주석 처리
        replace(/<!--([\s\S]*?)-->/g, function (match, p1) {
          // 주석 내부에 HTML 태그가 있는지 확인
          const hasHtmlTag = /<[a-z][\s\S]*>/i.test(p1);

          // 주석 내부에 HTML 태그가 있으면 주석 그대로 반환, 아니면 정리 진행
          if (hasHtmlTag) {
            return match;
          } else {
            const cleanedComment = p1.replace(/\s+/g, ' ').trim();
            return `<!-- ${cleanedComment} -->`;
          }
        }),
      )
      .pipe(dest('./dist/'))
  );
}
// Watch files
function watchFiles() {
  watch('./src/scss/**', css);
  watch('./src/js/**', series(js, lib_js));
  watch('./src/images/**', images);
  watch('./src/html/**/*.*', series(clearHtml, html, htmlIndex));
  watch('./src/index.html', series(htmlIndex));
}
// BrowserSync
function browserSync() {
  browsersync.init({
    server: {
      baseDir: './dist',
    },
    port: 3000,
  });

  watch('./src/**').on('change', reload);
}

// Tasks to define the execution of the functions simultaneously or in series
exports.image = series(images);
exports.watch = parallel(watchFiles, browserSync);
exports.build = series(clear, parallel(font, html, htmlIndex, css, lib_js, lib_css, js, images));
