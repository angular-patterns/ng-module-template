const path = require('path');
const pkg = require(path.resolve(__dirname,'../package.json' ));
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'tags', alias: 't', type: String, defaultValue: `${pkg.name}` }
];

const options = commandLineArgs(optionDefinitions);

const tags = options.tags.split(',');

tags.forEach(t=> {
    console.log(`@echo ##vso[build.addbuildtag]${t}\n`);
});
