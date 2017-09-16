# ng-module-template

A template for building re-usable angular modules.

## Setup
  1. `npm clone https://github.com/angular-patterns/ng-module-template.git`
  2. `cd ng-module-template`
  3. `npm install`
  4. `npm <build target>`

## Build Targets

### `npm run compile`
Uses `gulp` to inline the HTML templates and `ngc` to compile the source. The resulting files are output to the `dist` folder

### `npm run bundle`
Uses `rollup` to generate the `index.es5.js` bundle

### `npm run bundle-umd`
Uses `rollup` to generate the UMD bundle and save it to the `dist/bundles` folder

### `npm run build`
Compiles and builds the module.
 
