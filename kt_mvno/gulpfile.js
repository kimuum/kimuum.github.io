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
  return src(['./dist/**/*.*'], {
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
      }),
    )

    .pipe(dest('./codingList/', { sourcemaps: false }))
    .pipe(browsersync.stream());
}

// 사용자
function customerDefault() {
  return src('./customer/src/assets/**/*.*').pipe(dest('./dist/customer/assets/'));
}
function customerJs() {
  const source = './customer/src/js/*.js';

  return (
    src(source)
      .pipe(changed(source))
      .pipe(concat('bundle.js'))
      // minifies JS files
      // .pipe(uglify())
      // adds .min to the name of the compiled file
      // .pipe(rename({
      //     extname: '.min.js'
      // }))
      .pipe(dest('./dist/customer/assets/js/'))
      .pipe(browsersync.stream())
  );
}
function customerCss() {
  const source = './customer/src/scss/style.scss';

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
    .pipe(gulp.dest('./dist/customer/assets/css/', { sourcemaps: true }))
    .pipe(browsersync.stream());
}
function customerImages() {
  return (
    src('./customer/src/images/**')
      // .pipe(imagemin())
      .pipe(dest('./dist/customer/assets/images'))
  );
}
function customerHtml(done) {
  return (
    src(['./customer/html/**/*.*', '!./customer/include/*.*'])
      .pipe(
        fileinclude({
          prefix: '@@',
          basepath: './customer/include',
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
      .pipe(beautify.html({ indent_size: 2 })) //들여쓰기 공백2
      .pipe(dest('./dist/customer/html/'))
  );
  done();
}

// 관리자
function adminDefault() {
  return src('./admin/src/assets/**/*.*').pipe(dest('./dist/admin/assets/'));
}
function adminCss() {
  const source = './admin/src/scss/style.scss';

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
function adminJs() {
  const source = './admin/src/js/*.js';

  return (
    src(source)
      .pipe(changed(source))
      .pipe(concat('bundle.js'))
      // minifies JS files
      // .pipe(uglify())
      // adds .min to the name of the compiled file
      // .pipe(rename({
      //     extname: '.min.js'
      // }))
      .pipe(dest('./dist/admin/assets/js/'))
      .pipe(browsersync.stream())
  );
}
function adminImages() {
  return (
    src('./admin/src/images/**')
      // .pipe(imagemin())
      .pipe(dest('./dist/admin/assets/images'))
  );
}
function adminHtmlBiz(done) {
  return (
    src(['./admin/adminBusiness/**/*.*', '!./admin/include/**/*.*'])
      .pipe(
        fileinclude({
          prefix: '@@',
          basepath: './admin/include',
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
      .pipe(beautify.html({ indent_size: 2 })) //들여쓰기 공백2
      .pipe(dest('./dist/admin/adminBusiness'))
  );
  done();
}
function adminHtmlSuper(done) {
  return (
    src(['./admin/adminSuper/**/*.*', '!./admin/include/**/*.*'])
      .pipe(
        fileinclude({
          prefix: '@@',
          basepath: './admin/include',
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
      .pipe(beautify.html({ indent_size: 2 })) //들여쓰기 공백2
      .pipe(dest('./dist/admin/adminSuper'))
  );
  done();
}

// Watch files
function watchCustomerFiles() {
  watch('./customer/src/assets/**', customerDefault);
  watch('./customer/src/scss/**', customerCss);
  watch('./customer/src/js/**', customerJs);
  watch('./customer/src/images/**', customerImages);
  watch('./customer/html/**/*.*', series(customerHtml));
}
function watchAdminFiles() {
  watch('./admin/src/assets/**', adminDefault);
  watch('./admin/src/scss/**', adminCss);
  watch('./admin/src/js/**', adminJs);
  watch('./admin/src/images/**', adminImages);
  watch('./admin/adminBusiness/**/*.*', series(adminHtmlBiz));
  watch('./admin/adminSuper/**/*.*', series(adminHtmlSuper));
}

// BrowserSync
function browserSync() {
  browsersync.init({
    server: {
      baseDir: './',
    },
    port: 3000,
  });

  watch('./admin/**').on('change', reload);
  watch('./customer/**').on('change', reload);
}

// Tasks to define the execution of the functions simultaneously or in series
exports.user = parallel(watchCustomerFiles, browserSync);
exports.admin = parallel(watchAdminFiles, browserSync);
exports.build = series(clear, parallel(codingListCss, customerDefault, customerCss, customerJs, customerImages, customerHtml, adminDefault, adminCss, adminJs, adminImages, adminHtmlBiz, adminHtmlSuper));
