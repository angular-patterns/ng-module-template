const gulp = require('gulp');
const del = require('del');
const inlineNg2Template = require('gulp-inline-ng2-template');

gulp.task('clean', function () {
    return del([
        "dist/**",
        "compiled/**"
    ], { force: true });

});

gulp.task('copy-public-api', ['clean'], function() {
    return gulp.src([
        'public_api.ts'
    ])
    .pipe(gulp.dest('dist'))

});
gulp.task('copy-src',['copy-public-api'], function () {
    return gulp.src([
        'src/**/*.ts',
        '!src/**/*.spec.ts'
    ])
    .pipe(inlineNg2Template({ base: './src', useRelativePaths: true }))
    .pipe(gulp.dest('dist/src'))
});