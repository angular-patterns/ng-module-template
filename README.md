# ng-module-template

## Install

`  git clone https://github.com/angular-patterns/ng-module-template.git`<br />
`  cd ng-module-template` <br />
`  npm install`

## Development

Opens webpack-dev-server on port 8080 for development:

`  npm run dev`

## Test

There are three type of tests: 

1. Unit Tests - `npm run test`
2. e2e Tests - `npm run e2e`
3. lint Tests - `npm run lint`

## Production Builds

You have two options for a production build:

1. Angular Application - outputs to the `dist` folder.<br/>
  `npm run build`
 
2. Reusable Angular Module - outputs to the `dist` folder.<br/>
  `npm run build-module`
  
## Deployment

There are two options for deployment.

1. Deploy to local file system<br/>
  `npm run publish-local` - publishes from the `dist` folder to `c:\packages` (publish folder is configurable). <br />
  The folder can be customized using a `dest` parameter:<br/>
  `npm run publish -- --dest c:\custom-folder`
  
2. Publish to npm<br/>
  `npm publish`<br/>
  Follow the publish instructions from npm: https://docs.npmjs.com/getting-started/publishing-npm-packages
  
## Building Reusable Angular Modules

Rename the module before you publish:<br />

`npm run name-module -- --name my-module` <br />
`git add *` <br />
`git commit -m "renamed module from ng-module-template to my-module"`

Optional Versioning:

`npm version patch`

Then publish:

`npm run publish-local`

or

`npm publish`

## Installing your Published Module

If you published locally:<br />
`npm install c:\packages\my-module --save`

If you published to npm:<br />
`npm install my-module --save`






