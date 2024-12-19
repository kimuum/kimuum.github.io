const gulp = require('gulp');
const { series, parallel, watch, lastRun } = require('gulp'); //내부모듈

//외부모듈들
const replace = require('gulp-replace');
const browsersync = require('browser-sync').create();
const merge = require('merge-stream');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const sass = require('gulp-sass')(require('sass'));
const fileinclude = require('gulp-file-include');
const beautify = require('gulp-beautify');
const prettyHtml = require('gulp-pretty-html');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
//114 folder path
const sourceBase114 = './src/114/VARS_1.0.1/';
const destBase114 = './dev/114/VARS_1.0.1/';
const distBase114 = './dist/114/VARS_1.0.1/';

// 1600-2000 folder path
const sourceBase1600 = './src/1600-2000/VARS_1.0.1/';
const destBase1600 = './dev/1600-2000/VARS_1.0.1/';
const distBase1600 = './dist/1600-2000/VARS_1.0.1/';

//114 path
const scss114new = './src/pub/114/scss/new_style.scss';
const lib114new = './src/pub/114/scss/lib/swiper.min.css';
const include114Html = '!./src/pub/114/component/**/*.*';
const source114Html = sourceBase114 + 'html/**/*.*';
const general114Html = '!./dev/114/VARS_1.0.1/html/general/*.*';
const source114image = sourceBase114 + 'images/**/*.*';
const source114js = sourceBase114 + 'js/**/*.*';

//1600-2000 path
const scss1600new = './src/pub/1600-2000/scss/new_style.scss';
const include1600Html = '!./src/pub/1600-2000/component/**/*.*';
const source1600Html = sourceBase1600 + 'html/**/*.*';
const source1600image = sourceBase1600 + 'images/**/*.*';
const source1600js = sourceBase1600 + 'js/**/*.*';

//claer
function clearTask(paths) {
  return function clear() {
    return gulp.src(paths, { read: false, allowEmpty: true }).pipe(clean());
  };
}
//Allclear
const pathAllclear = ['./dist', './dev'];
const clearAll = clearTask(pathAllclear);

//114 clear
const pathclear114 = ['./dist/114', './dev/114'];
const claer114 = clearTask(pathclear114);

//1600 clear
const pathclear1600 = ['./dist/1600-2000', './dev/1600-2000'];
const claer1600 = clearTask(pathclear1600);

//114 로컬 산출물
function devNew114() {
  const task114fonts = gulp.src(sourceBase114 + 'fonts/*.*').pipe(gulp.dest(destBase114 + 'fonts/'));
  const task114Scss = gulp
    .src(scss114new, { sourcemaps: true }, { since: gulp.lastRun(devNew114) })
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(concat('new_style.css'))
    .pipe(gulp.dest(destBase114 + 'css_c/', { sourcemaps: true }))
    .pipe(gulp.dest(destBase114 + 'css_t/', { sourcemaps: true }))
    .pipe(browsersync.stream());

  const task114lib = gulp
    .src(lib114new)
    .pipe(gulp.dest(destBase114 + 'css_c/lib'))
    .pipe(gulp.dest(destBase114 + 'css_t/lib'));

  const task114Html = gulp
    .src([source114Html, include114Html], { since: gulp.lastRun(devNew114) })
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: './src/pub/114/component',
      }),
    )
    .pipe(replace('<!-- prettier-ignore -->', ''))
    .pipe(replace('/>', '>'))
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
    .pipe(beautify.html({ indent_size: 2 }))
    .pipe(replace('/{version}', '..'))
    .pipe(replace('{vars_type}', '_c'))
    .pipe(gulp.dest(destBase114 + 'html/'));
  const task114js = gulp.src(source114js).pipe(gulp.dest(destBase114 + 'js/'));
  const nfilter114 = gulp.src(sourceBase114 + 'nfilter/**/*.*').pipe(gulp.dest(destBase114 + 'nfilter/'));
  const images114 = gulp
    .src(source114image, { since: gulp.lastRun(devNew114) })
    .pipe(imagemin())
    .pipe(gulp.dest(destBase114 + 'images/'));
  return merge(task114fonts, task114Scss, task114lib, task114Html, images114, task114js, nfilter114);
}

//114 배포 산출물
function distNew114() {
  const timestamp = Date.now();
  const taskdist114Css = gulp
    .src(scss114new)
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(replace(/(\.(jpg|png|gif))/g, `$1?ver=${timestamp}`))
    .pipe(concat('new_style.css'))
    .pipe(gulp.dest(distBase114 + 'css_c/'))
    .pipe(gulp.dest(distBase114 + 'css_t/'));

  const task114lib = gulp
    .src(lib114new)
    .pipe(gulp.dest(distBase114 + 'css_c/lib'))
    .pipe(gulp.dest(distBase114 + 'css_t/lib'));

  const task114distHtml = gulp
    .src([destBase114 + 'html/**/*.*', general114Html])
    //필수 경로 변수명으로 배포
    .pipe(replace('../', '/{version}/'))
    .pipe(replace('css_c', 'css{vars_type}'))
    .pipe(replace(/(\.css["'])/g, `.css?ver=${timestamp}"`))
    .pipe(replace(/(\.js["'])/g, `.js?ver=${timestamp}"`))
    .pipe(replace(/(\.(jpg|png|gif))/g, `$1?ver=${timestamp}`))
    .pipe(replace(/\/\*@build-time\*\/\s*(.*)/g, '// @build-time $1'))
    .pipe(
      replace(/<!--\s*\/\/\s*배포시\s*주석처리\s*start\s*-->([\s\S]*?)<!--\s*\/\/\s*배포시\s*주석처리\s*end\s*-->/g, function (match, p1) {
        const commentedContent = p1.replace(/(^|\n)\s*\/\/\s*/g, '').trim();
        return `<!-- // 배포시 주석처리 start -->\n<!-- ${commentedContent} -->\n<!-- // 배포시 주석처리 end -->`;
      }),
    )
    .pipe(gulp.dest(distBase114 + 'html/'));

  const task114js = gulp.src(source114js).pipe(gulp.dest(distBase114 + 'js/'));
  const nfilter114 = gulp.src(sourceBase114 + 'nfilter/**/*.*').pipe(gulp.dest(distBase114 + 'nfilter/'));

  const images114 = gulp.src(source114image).pipe(gulp.dest(distBase114 + 'images/'));
  return merge(taskdist114Css, task114lib, task114distHtml, images114, task114js, nfilter114);
}

//114 watch
function watch114Files() {
  browsersync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch(['./src/pub/114/scss/**/*.*', source114Html, source114image, source114js], devNew114);
  gulp.watch([sourceBase114]).on('change', browsersync.reload);
}

//1600 로컬 산출물
function devNew1600() {
  const task1600fonts = gulp.src(sourceBase1600 + 'fonts/*.*').pipe(gulp.dest(destBase1600 + 'fonts/'));
  const task1600Scss = gulp
    .src(scss1600new, { sourcemaps: true }, { since: gulp.lastRun(devNew1600) })
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(concat('new_style.css'))
    .pipe(gulp.dest(destBase1600 + 'css_c/', { sourcemaps: true }))
    .pipe(gulp.dest(destBase1600 + 'css_t/', { sourcemaps: true }))
    .pipe(browsersync.stream());

  const task1600Html = gulp
    .src([source1600Html, include1600Html], { since: gulp.lastRun(devNew1600) })
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: './src/pub/1600-2000/component',
      }),
    )
    .pipe(replace('<!-- prettier-ignore -->', ''))
    .pipe(replace('/>', '>'))
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
    .pipe(beautify.html({ indent_size: 2 }))
    .pipe(replace('/{version}', '..'))
    .pipe(replace('{vars_type}', '_c'))
    .pipe(gulp.dest(destBase1600 + 'html/'));
  const task1600js = gulp.src(source1600js).pipe(gulp.dest(destBase1600 + 'js/'));
  const nfilter1600 = gulp.src(sourceBase1600 + 'nfilter/**/*.*').pipe(gulp.dest(destBase1600 + 'nfilter/'));
  const images1600 = gulp
    .src(source1600image, { since: gulp.lastRun(devNew1600) })
    .pipe(imagemin())
    .pipe(gulp.dest(destBase1600 + 'images/'));
  return merge(task1600fonts, task1600Scss, task1600Html, images1600, task1600js, nfilter1600);
}

//1600 배포 산출물
function distNew1600() {
  const timestamp = Date.now();
  const taskdist1600Css = gulp
    .src(scss1600new)
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(replace(/(\.(jpg|png|gif))/g, `$1?ver=${timestamp}`))
    .pipe(concat('new_style.css'))
    .pipe(gulp.dest(distBase1600 + 'css_c/'))
    .pipe(gulp.dest(distBase1600 + 'css_t/'));

  const task1600distHtml = gulp
    .src(destBase1600 + 'html/**/*.*')
    //필수 경로 변수명으로 배포
    .pipe(replace('../', '/{version}/'))
    .pipe(replace('css_c', 'css{vars_type}'))
    .pipe(replace(/(\.css["'])/g, `.css?ver=${timestamp}"`))
    .pipe(replace(/(\.js["'])/g, `.js?ver=${timestamp}"`))
    .pipe(replace(/(\.(jpg|png|gif))/g, `$1?ver=${timestamp}`))
    .pipe(replace(/\/\*@build-time\*\/\s*(.*)/g, '// @build-time $1'))
    .pipe(
      replace(/<!--\s*\/\/\s*배포시\s*주석처리\s*start\s*-->([\s\S]*?)<!--\s*\/\/\s*배포시\s*주석처리\s*end\s*-->/g, function (match, p1) {
        const commentedContent = p1.replace(/(^|\n)\s*\/\/\s*/g, '').trim();
        return `<!-- // 배포시 주석처리 start -->\n<!-- ${commentedContent} -->\n<!-- // 배포시 주석처리 end -->`;
      }),
    )
    .pipe(gulp.dest(distBase1600 + 'html/'));

  const task1600js = gulp.src(source1600js).pipe(gulp.dest(distBase1600 + 'js/'));
  const nfilter1600 = gulp.src(sourceBase1600 + 'nfilter/**/*.*').pipe(gulp.dest(distBase1600 + 'nfilter/'));

  const images1600 = gulp.src(source1600image).pipe(gulp.dest(distBase1600 + 'images/'));
  return merge(taskdist1600Css, task1600distHtml, images1600, task1600js, nfilter1600);
}

//1600 watch
function watch1600Files() {
  browsersync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch(['./src/pub/1600-2000/scss/**/*.*', source1600Html, source1600image, source1600js], devNew1600);
  gulp.watch([sourceBase1600]).on('change', browsersync.reload);
}

exports.clear = gulp.series(clearAll);
exports.dev = gulp.series(devNew114, devNew1600);

exports.watch114 = gulp.series(watch114Files);
exports.dev114 = gulp.series(claer114, devNew114);
exports.dist114 = gulp.series(claer114, devNew114, distNew114);

exports.watch1600 = gulp.series(watch1600Files);
exports.dev1600 = gulp.series(claer1600, devNew1600);
exports.dist1600 = gulp.series(claer1600, devNew1600, distNew1600);
