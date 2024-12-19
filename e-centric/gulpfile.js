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
const beautify = require('gulp-beautify');

// Clean assets
function clear() {
  return src('./dist/**', {
    read: false,
  }).pipe(clean());
}

function clearHtml() {
  return src('./dist/html/*', {
    read: false,
  }).pipe(clean());
}

// JS function
function js() {
  const source = './src/js/*.js';

  return src(source).pipe(changed(source)).pipe(concat('bundle.js')).pipe(dest('./dist/assets/js/')).pipe(browsersync.stream());
}

function lib_js(done) {
  const libraries = [];

  return src(['./src/js/lib/**']).pipe(dest('./dist/assets/js/lib'));

  done();
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

function generalCss() {
  const source = './src/scss/general.scss';

  return gulp
    .src(source, { sourcemaps: true })
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(concat('general.css'))
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

// html function
function html(done) {
  return (
    src(['./src/html/**/*.*', '!./src/html/components/**/*.*'])
      .pipe(
        fileinclude({
          prefix: '@@',
          basepath: './src/html/components',
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
      .pipe(beautify.html({ indent_size: 4 }))
      .pipe(dest('./dist/html'))
  );
  done();
}

// font function
function font(done) {
  return src(['./src/fonts/**']).pipe(dest('./dist/assets/fonts'));
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
  watch('./src/scss/**', parallel(css, generalCss));
  watch('./src/js/**', series(js, lib_js));
  watch('./src/images/**', images);
  watch('./src/html/**/**', series(clearHtml, html));
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
exports.clear = series(clear);
exports.build = parallel(html, lib_js, js, css, generalCss, font, images, codingListCss);
exports.watch = parallel(watchFiles, browserSync);
