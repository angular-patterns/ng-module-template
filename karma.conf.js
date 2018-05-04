// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular/cli'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular/cli/plugins/karma')

      ],
      client:{
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
    //   coverageIstanbulReporter: {
    //     reports: [ 'html', 'lcovonly' ],
    //     fixWebpackSourcePaths: true
    //   },
      angularCli: {
        environment: 'dev',
        codeCoverage: true
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      coverageIstanbulReporter: {

        // reports can be any that are listed here: https://github.com/istanbuljs/istanbul-reports/tree/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib 
        reports: ['html', 'lcovonly', 'text-summary', 'text', 'json'],
  
        // base output directory. If you include %browser% in the path it will be replaced with the karma browser name 
        dir: 'reports/coverage',
  
        // if using webpack and pre-loaders, work around webpack breaking the source path 
        fixWebpackSourcePaths: true,
  
        // stop istanbul outputting messages like `File [${filename}] ignored, nothing could be mapped` 
        skipFilesWithNoCoverage: true,
  
        // Most reporters accept additional config options. You can pass these through the `report-config` option 
        'report-config': {
  
          // all options available at: https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137 
          html: {
            // outputs the report in ./coverage/html 
            subdir: '.'
          }
  
        },
  
        // enforce percentage thresholds 
        // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode 
        thresholds: {
          emitWarning: false, // set to `true` to not fail the test command when thresholds are not met 
          global: { // thresholds for all files 
            statements: 80,
            lines: 80,
            branches: 80,
            functions: 80
          },
          each: { // thresholds per file 
            statements: 80,
            lines: 80,
            branches: 80,
            functions: 80,
            overrides: {
              'baz/component/**/*.js': {
                statements: 98
              }
            }
          }
        }
  
      }
    });
  };
  