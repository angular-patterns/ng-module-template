// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { options } = require('./protractor-args');
const { SpecReporter } = require('jasmine-spec-reporter');
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'reports/e2e',
  filename: 'index.html'
});


const publishPath = options.dest;

if (options.baseUrl != null)
{
    console.log(`baseUrl: `, `${options.baseUrl}`);
}

if (options.virtualPath != null)
{
    console.log(`virtualPath: `, `${options.virtualPath}`);
}

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './app/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: options.baseUrl,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },  
  onPrepare() {
    require('ts-node').register({
      project: './tsconfig.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(reporter);
  },
  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
};
