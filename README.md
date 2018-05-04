# ng-module-template

A template for building Angular applications or re-usable Angular modules that you can publish to npm. This template is Angular5 compatible.
## Install
sdfsdfs
`  git clone https://github.com/angular-patterns/ng-module-template.git`<br /> sdf
`  cd ng-module-template` <br />
`  npm install`

## Development

Opens webpack-dev-server on port 8080 for development:

`  npm run dev`

If you are building a reusable Angular module, you will also have to export any compnents, pipes, services, etc from `src\public_api.ts`. This will allow users of your module to import those sybmols directly.

For example, if you want to export MyComponent, then modify `public_api.ts`:<br />

`  export { MyComponent } from 'app/my.component';`
<br />
<br />
Users of your module can then import the component:<br />

`  import { MyComponent } from 'ng-module-template'`

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

1. Publish to local file system<br/>
  `npm run publish-local` - publishes from the `dist` folder to `c:\packages`. <br />
  
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

Yeah yeah

Blah baljdlksfjsd


