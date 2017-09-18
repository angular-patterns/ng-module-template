# ng-module-template

A minimal template for building re-usable angular modules.

## Setup
  1. `git clone https://github.com/angular-patterns/ng-module-template.git`
  2. `cd ng-module-template`
  3. `npm install`
  4. `npm run <build target>`

## Build Targets

### `compile`
Uses `gulp` to inline the HTML templates and `ngc` to compile the source. The resulting files are output to the `dist` folder

### `bundle`
Uses `rollup` to generate the `index.es5.js` bundle

### `bundle-umd`
Uses `rollup` to generate the `app.bundle.umd.js` UMD bundle and save it to the `dist/bundles` folder

### `build`
Compiles and builds the module.
 
