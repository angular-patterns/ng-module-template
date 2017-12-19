const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'baseUrl', alias: 'b', type: String, defaultValue: `http://localhost:8080/` },
    { name: 'virtualPath', alias: 'v', type: String, defaultValue: '/' }
];

const options = commandLineArgs(optionDefinitions);

exports.options = options;