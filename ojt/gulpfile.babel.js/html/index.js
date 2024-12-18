const {src, dest} = require('gulp');
const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');
const util = require('util');
const newer = require('gulp-newer');
const htmlhint = require('gulp-htmlhint');
const ejs = require('gulp-ejs');
const beautify = require('gulp-jsbeautifier');
const config = require('../../config.json');
const fileinclude = require('gulp-file-include');
const replace = require('gulp-replace');

const setHTML = () => 
    src([config.htmlSetting.src, '!' + config.htmlSetting.except])
    .pipe(newer(config.htmlSetting.dist))
    .pipe(ejs())
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
    .pipe(htmlhint('templates/htmlhint.json'))
    .pipe(htmlhint.reporter())
    .pipe(beautify({
        config: '.jsbeautifyrc',
        mode: 'VERIFY_AND_WRITE'
    }))
    .pipe(dest(config.dir.dist))

const generateHTML = (done) => {
    let dPath       = "dist/views",
        projectObj  = {},
        docFiles    = [],
        normalFiles = [],
        categories  = [],
        projectObjStr,
        projectObjJson;

    let projectJson               = fs.readFileSync('templates/projectInfo.json', 'utf-8'),
        projectInfo               = {};
        projectInfo.projectName   = JSON.parse(projectJson).project_name;
        projectInfo.projectAuthor = JSON.parse(projectJson).author;
        projectInfo.projectOrg    = JSON.parse(projectJson).organization;

    fs.readdir(dPath, function(err, files) {
        if (err) {
            throw err;
        }
        files.map(function(file) {
            return path.join(dPath, file);
        }).filter(function(file) {
            return fs.statSync(file).isFile();
        }).forEach(function(file) {
            let dfileData,
                fileInnerText,
                wholeTitle,
                splitTitle,
                nfileData,
                pageStatus,
                splitStatus;

            let stats = fs.statSync(file);

            let extname  = path.extname(file),
                basename = path.basename(file);
            if (extname == '.html') {
                // Document Pages
                if (basename.match(/@/)) {
                    dfileData = {};

                        fileInnerText = fs.readFileSync(file, 'utf8');
                    let $             = cheerio.load(fileInnerText);
                        wholeTitle    = ($('meta[name="list"]').length !== 0) ? $('meta[name="list"]').attr('content') : $('title').text();
                        splitTitle    = wholeTitle.split(' : ');

                    if ($('body').data('pagestatus')) {
                        pageStatus                = $('body').data('pagestatus');
                        splitStatus               = pageStatus.split(' : ');
                        dfileData.splitStatus     = splitStatus[0];
                        dfileData.splitStatusDate = splitStatus[1];
                    }

                    dfileData.title        = splitTitle[0];
                    dfileData.name         = path.basename(file);
                    dfileData.category     = String(dfileData.name).substring(0, 2);
                    dfileData.categoryText = splitTitle[1];
                    dfileData.listTitle    = wholeTitle;
                    dfileData.mdate        = new Date(util.inspect(stats.mtime));
                    docFiles.push(dfileData);
                    if (!categories.includes(dfileData.category)) {
                        categories.push(dfileData.category);
                    }
                    if ($('meta[name="list"]').length !== 0) {
                        $('meta[name="list"]').remove();
                        fs.writeFileSync(file, $.html({
                            decodeEntities: false
                        }), function(err) {
                            if (err) throw err;
                        });
                    }
                } else {
                    // Normal Pages
                    nfileData = {};

                        fileInnerText = fs.readFileSync(file, 'utf8');
                    let $             = cheerio.load(fileInnerText);
                        wholeTitle    = ($('meta[name="list"]').length !== 0) ? $('meta[name="list"]').attr('content') : $('title').text();
                        splitTitle    = wholeTitle.split(' : ');

                    if ($('body').data('pagestatus')) {
                        pageStatus                = $('body').data('pagestatus');
                        splitStatus               = pageStatus.split(' : ');
                        nfileData.splitStatus     = splitStatus[0];
                        nfileData.splitStatusDate = splitStatus[1];
                    }

                    nfileData.title        = splitTitle[0];
                    nfileData.name         = path.basename(file);
                    nfileData.category     = String(nfileData.name).substring(0, 2);
                    nfileData.categoryText = splitTitle[1];
                    nfileData.listTitle    = wholeTitle;
                    nfileData.mdate        = new Date(util.inspect(stats.mtime));
                    normalFiles.push(nfileData);
                    if (!categories.includes(nfileData.category)) {
                        categories.push(nfileData.category);
                    }
                    if ($('meta[name="list"]').length !== 0) {
                        $('meta[name="list"]').remove();
                        fs.writeFileSync(file, $.html({
                            decodeEntities: false
                        }), function(err) {
                            if (err) throw err;
                        });
                    }
                }
            }
        });

        projectObj = {
            project: projectInfo,
            dfiles : docFiles,
            nfiles : normalFiles
        };

        projectObjStr  = JSON.stringify(projectObj);
        projectObjJson = JSON.parse(projectObjStr);

        src("templates/@index.html")
        .pipe(ejs(projectObjJson))
        .pipe(dest("dist/"))
        done();
    });
}
module.exports={
    setHTML,
    generateHTML,
}