const gulp = require('gulp');
const shell = require('gulp-shell');
const del = require('del');
const pkg = require('../package.json');
const rollup = require('rollup');
const inlineNg2Template = require('gulp-inline-ng2-template');
const jsonModify = require('gulp-json-modify')

gulp.task('clean', function () {
    return del([
        "dist/**"
    ], { force: true });
});

gulp.task('pre-deploy', function () {
    return del([
        "../dist/**"
    ], { force: true });
});


gulp.task('copy-public-api', ['clean'], function () {
    return gulp.src([
        'public_api.ts'
    ])
        .pipe(gulp.dest('dist'))

});
gulp.task('copy-src', ['copy-public-api'], function () {
    return gulp.src([
        '../src/app/**/*.ts',
        '!../src/app/**/*.spec.ts'
    ])
        .pipe(inlineNg2Template({ base: '../src', useRelativePaths: true }))
        .pipe(gulp.dest('dist/src'))
});

gulp.task('compile', ['copy-src'], function () {
    return gulp.src('tsconfig.json')
        .pipe(shell(['"../node_modules/.bin/ngc" -p <%= file.path %>']));
});

gulp.task('bundle', ['compile'], function () {
    var external = [
        '@angular/core',
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated'
    ];

    var globals = {
        '@angular/core': 'vendor._angular_core',
        '@angular/http': 'vendor._angular_http',
        '@angular/platform-browser': 'vendor._angular_platformBrowser',
        '@angular/platform-browser-dynamic': 'vendor._angular_platformBrowserDynamic',
        '@angular/router-deprecated': 'vendor._angular_routerDeprecated'
    };

    return rollup.rollup({
        input: 'dist/index.js',
        onwarn: function (warning) {
            if (warning.message.indexOf("treating it as an external dependency") > -1)
                return;


            console.warn(warning.message);
        }

    }).then(function (bundle) {
        bundle.write({
            file: `dist/bundles/${pkg.name}.umd.js`,
            format: 'umd',
            exports: 'named',
            name: pkg.name,
            sourcemap: true,
            external: external,
            globals: globals
        });
        bundle.write({
            file: `dist/bundles/${pkg.name}.cjs.js`,
            format: 'cjs',
            exports: 'named',
            name: pkg.name,
            sourcemap: true,
            external: external,
            globals: globals
        });
        bundle.write({
            file: `dist/bundles/${pkg.name}.amd.js`,
            format: 'amd',
            exports: 'named',
            name: pkg.name,
            sourcemap: true,
            external: external,
            globals: globals
        });

        bundle.write({
            file: `dist/index.es5.js`,
            format: 'es',
            exports: 'named',
            name: pkg.name,
            sourcemap: true,
            external: external,
            globals: globals

        });

    });
});

gulp.task('build', ['bundle'], function () {
    return del([
        "node_modules/**"
    ], { force: true });
});

gulp.task('deploy', ['build', 'pre-deploy'], function () {
    return gulp.src([
        'dist/index.es5.js',
        'dist/public_api.js',
        'dist/index.metadata.json',
        'dist/bundles/**.js',
        'dist/**/*.d.ts',
        '!../src/app/**/*.spec.ts'
    ], { base: 'dist' })
        .pipe(gulp.dest('../dist'))
});

gulp.task('publish', ['deploy'], function () {
    var tasks = [];
    if (process.argv.length == 4) {
        var dest = process.argv[3].substring(2);
        var copyTask = gulp.src([
            '../package.json',
            '../dist/**/*'
        ], { base: '../'})
        .pipe(gulp.dest(dest));
        tasks.push(copyTask);     
    }
    
    
    var delTask = del([
        "dist/**"
    ], { force: true });

    tasks.push(delTask);
    return tasks;

});

gulp.task('name-module', function () {
    var name = process.argv[3].substring(2);
    var modifyPackageJson =
        gulp.src([ '../package.json' ])
            .pipe(jsonModify({
                key: 'name',
                value: name
            }))
            .pipe(jsonModify({
                key: 'module',
                value: `dist/bundles/${name}.umd.js`
            }))
            .pipe(gulp.dest('../'));

    var modifyTsconfigJson = 
        gulp.src(['./tsconfig.json'])
            .pipe(jsonModify({
                key: 'angularCompilerOptions.flatModuleId',
                value: name
            }))
            .pipe(gulp.dest('./'));
    return [
        modifyPackageJson, 
        modifyTsconfigJson
    ];

});