const gulp = require('gulp');
const git = require('gulp-git');
const shell = require('gulp-shell');
const del = require('del');
const pkg = require('../package.json');
const rollup = require('rollup');
const inlineNg2Template = require('gulp-inline-ng2-template');
const jsonModify = require('gulp-json-modify')
const path = require('path');
const fs = require('fs');
const runSequence = require('run-sequence');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const toPascalCase = require('to-pascal-case');

const publishPath = (function(){
    if (process.argv.length == 4) {
        var destPath = process.argv[3].substring(2);
        var publishPath = path.resolve(destPath, pkg.name);
        return publishPath;
    }
    return null;
})();
if (publishPath != null)
{
    console.log(`publish path: ${publishPath}`);    
}


gulp.task('clean', function () {
    return del([
        "dist/**"
    ], { force: true });
});


gulp.task('copy-public-api', ['clean'], function () {
    return gulp.src([
        '../src/public_api.ts'
    ])
    .pipe(replace('./app', './src'))
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

gulp.task('compile', ['copy-src'], function (done) {
    gulp.src('tsconfig.json')
        .pipe(shell(['"../node_modules/.bin/ngc" -p <%= file.path %>']))
        .on('end', function () {
            del('node_modules/**', { force: true }).then(function () {
                done();
            });
        });
});

gulp.task('bundle', ['compile'], function (done) {
    var external = [
        '@angular/core',
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        'rxjs/BehaviorSubject'
    ];

    var globals = {
        '@angular/core': 'vendor._angular_core',
        '@angular/http': 'vendor._angular_http',
        '@angular/platform-browser': 'vendor._angular_platformBrowser',
        '@angular/platform-browser-dynamic': 'vendor._angular_platformBrowserDynamic',
        '@angular/router-deprecated': 'vendor._angular_routerDeprecated',
        'rxjs/BehaviorSubject': 'vendor._rxjs_behaviorSubject'
    };

    rollup.rollup({
        input: 'dist/index.js',
        onwarn: function (warning) {
            if (warning.message.indexOf("treating it as an external dependency") > -1)
                return;


            console.warn(warning.message);
        }

    }).then(function (bundle) {
        var umd = bundle.write({
            file: `dist/bundles/${pkg.name}.umd.js`,
            format: 'umd',
            exports: 'named',
            name: pkg.name,
            sourcemap: true,
            external: external,
            globals: globals
        });
        var cjs = bundle.write({
            file: `dist/bundles/${pkg.name}.cjs.js`,
            format: 'cjs',
            exports: 'named',
            name: pkg.name,
            sourcemap: true,
            external: external,
            globals: globals
        });
        var amd = bundle.write({
            file: `dist/bundles/${pkg.name}.amd.js`,
            format: 'amd',
            exports: 'named',
            name: pkg.name,
            sourcemap: true,
            external: external,
            globals: globals
        });

        var es = bundle.write({
            file: `dist/index.es5.js`,
            format: 'es',
            exports: 'named',
            name: pkg.name,
            sourcemap: true,
            external: external,
            globals: globals

        });

        return Promise.all([umd, cjs, amd, es]).then(function () {
            done();
        });

    });
});

gulp.task('pre-build', function () {
    return del([
        "../dist/**"
    ], { force: true });
});


gulp.task('build', ['pre-build', 'bundle'], function (done) {
    gulp.src([
        'dist/index.es5.js',
        'dist/public_api.js',
        'dist/index.metadata.json',
        'dist/bundles/**.js',
        'dist/**/*.d.ts',
        '!../src/app/**/*.spec.ts'
    ], { base: 'dist' })
        .pipe(gulp.dest('../dist'))
        .on('end', function () {
            del('dist/**', { force: true }).then(function () {
                done();
            });
        });
});

gulp.task('pre-deploy', function () {
    if (publishPath != null) {
        var delPath = path.join(publishPath, '**/*');
        return del(delPath, { force: true });
    }
});


gulp.task('git-init', function(done){
    if (publishPath != null) {
        process.chdir(publishPath);
        git.init({args: '--quiet'}, function (err) {
            if (err) throw err;
            done();
        });
    }
});

gulp.task('git-add', function(){
    if (publishPath != null) {
        process.chdir(publishPath);
        return gulp.src(path.join(publishPath, '**/*'))
            .pipe(git.add());
    }
});

gulp.task('git-commit', function(){
    if (publishPath != null) {
        process.chdir(publishPath);
        return gulp.src(path.join(publishPath, '**/*'))
          .pipe(git.commit(`v${pkg.version}`));
    }
});
  
gulp.task('git-tag', function(done){
    if (publishPath != null) {
        process.chdir(publishPath);
        git.tag(pkg.version, `v${pkg.version}`, function(err) {
            if (err) throw err;
            done();
        });    }
});

gulp.task('publish', ['deploy'], function (done) {
  if (publishPath != null) {
      runSequence('git-init','git-add', 'git-commit', 'git-tag', done);
  }  
});

gulp.task('deploy', ['pre-deploy'], function () {
    if (publishPath != null) {
        var srcPath = path.resolve('../');
        return gulp.src([
            path.join(srcPath, 'package.json'),
            path.join(srcPath, 'dist/**/*')
        ], { base: srcPath })
        .pipe(gulp.dest(publishPath));
    }
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

    var modifyAppModule = 
        gulp.src('../src/app/app.module.ts')
            .pipe(replace('AppModule', toPascalCase(name + 'Module')))
            .pipe(gulp.dest('../src/app'));

    var modifyWebpack = 
        gulp.src('../webpack.config.js')
            .pipe(replace('#AppModule', '#' + toPascalCase(name + 'Module')))
            .pipe(gulp.dest('../'));
            
    return [
        modifyPackageJson,
        modifyTsconfigJson,
        modifyAppModule,
        modifyWebpack
    ];

});