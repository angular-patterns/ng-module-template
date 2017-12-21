var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  var _config = {
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['coverage', 'remap-coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    webpack: webpackConfig,
    client: {
      captureConsole: false
    },

    files: [
      {pattern: './karma-shim.js', watched: false}
    ],
    preprocessors: {
      './karma-shim.js': ['coverage', 'webpack', 'sourcemap'] 
    },
    coverageReporter: {
      type: 'in-memory'
    },
    remapCoverageReporter: {
      'text-summary': null,
      json: './coverage/coverage.json',
      html: './coverage/html',
      cobertura: './coverage/cobertura.xml',
      lcovonly: './coverage/lcov.info'
    },
    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunks: false
      }
    },
    customLaunchers: {
      ChromeTravisCi: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

  };
  
  if (process.env.TRAVIS) {
    _config.browsers = [
      'ChromeTravisCi'
    ];
  }

  config.set(_config);
};