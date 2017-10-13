// rollup.config.js
export default {
    // core input options
    input: 'dist/index.js',     // required
    external:[
        '@angular/core',
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated'
    ],
    output: {  // required (can be an array, for multiple outputs)
      // core output options
      file: 'dist/index.es5.js',    // required
      format: 'es',  // required
      globals: {
        '@angular/core': 'vendor._angular_core',
        '@angular/http': 'vendor._angular_http',
        '@angular/platform-browser': 'vendor._angular_platformBrowser',
        '@angular/platform-browser-dynamic': 'vendor._angular_platformBrowserDynamic',
        '@angular/router-deprecated': 'vendor._angular_routerDeprecated'
      },
      // danger zone
      exports: 'named'
    },
  };