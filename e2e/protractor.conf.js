// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const { options } = require('./protractor-args');

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
  onPrepare() {
    require('ts-node').register({
      project: './tsconfig.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
