const { src, dest, parallel } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const jsonminify = require('gulp-jsonminify');
const jsonEditor = require('gulp-json-editor');

// 压缩HTML
function minifyHtml() {
    return src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'));
}
exports.html = minifyHtml

// 压缩CSS
function minifyCss() {
    return src('src/*.css')
        .pipe(cleanCSS())
        .pipe(dest('dist'));
}
exports.css = minifyCss

// 压缩JS
function minifyJs() {
    return src('src/*.js')
        .pipe(uglify())
        .pipe(dest('dist'));
}
exports.js = minifyJs

// 压缩JSON
function minifyJson() {
    return src('src/*.json')
        .pipe(jsonEditor((json) => {
            // 这里写 json 修改逻辑
            return json;
        }))
        .pipe(jsonminify())
        .pipe(dest('dist'));
}
exports.json = minifyJson

exports.default = parallel(minifyHtml, minifyCss, minifyJs, minifyJson);