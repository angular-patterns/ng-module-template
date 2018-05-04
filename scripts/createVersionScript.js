var fs = require('fs');
var path = require('path');
const pkg = require(path.resolve(__dirname, '../package.json'));
const destFile = path.resolve(__dirname, 'version.bat');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'version', alias: 'v', type: String, defaultValue: '' },
    { name: 'buildNumber', alias: 'b', type: String, defaultValue: ''}
];

const options = commandLineArgs(optionDefinitions);

let command = '';
if (options.version == `refs/tags/v${pkg.version}`) {

    console.log('Branch: ' + options.version);
    console.log('Version: ' + pkg.version);

    const version = pkg.version;
    const major = version.split('.')[0];
    const minor = version.split('.')[1];
    const patch = version.split('.')[2];

    command += `@echo ##vso[task.setvariable variable=version]${version}\n`;
    command += `@echo ##vso[task.setvariable variable=major]${major}\n`;
    command += `@echo ##vso[task.setvariable variable=minor]${minor}\n`;
    command += `@echo ##vso[task.setvariable variable=patch]${patch}\n`;

    command += `@echo ##vso[build.addbuildtag]${version}\n`;
    command += `@echo ##vso[build.addbuildtag]Release\n`;
}

if (options.buildNumber != '') {
    command += `@echo ##vso[build.addbuildtag]Build ${options.buildNumber}\n`;

}

// if (!fs.existsSync(dest)){
//     fs.mkdirSync(dest);
// };

fs.writeFile(destFile, command, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log(command);
    console.log('Output to ' + destFile);
}); 
