# ng-module-template

A template for building Angular applications or re-usable Angular modules that you can publish to npm. This template is compatible with Angular 6.

For an Angular 5 compatible template, see ng-module-template version 5.

## Install
`  git clone https://github.com/angular-patterns/ng-module-template.git`<br />
`  cd ng-module-template` <br />
`  npm install`

## Development

Opens webpack-dev-server on port 8080 for development:

`  npm run dev`

## Building a Reusable Angular Module

`  npm run build-module`

Production distribution files may be found in the `dist` folder.

## Test

There are five type of tests: 

1. Unit Tests - `npm run test`
2. e2e Tests - `npm run e2e`
3. lint Tests - `npm run lint`
4. Code Metrics - `npm run metrics`
5. Size Report - `npm run build`

All reports are stored under the `reports` folder.

## Production Builds

You have two options for a production build:

1. Angular Application - outputs to the `dist` folder.<br/>
  `npm run build`
 
2. Reusable Angular Module - outputs to the `dist` folder.<br/>
  `npm run build-module`
  
  a. Specifying a Module to Package<br />
     Modify src\public_api.ts and overwrite the export statements:<br />
     `export * from './src/app/my/my.module.ts`<br />
     `export * from './src/app/my/my.component.ts`<br />
     
  Note: Remember to rebuild before publishing (i.e. `npm run build` or `npm run build-module`)
  
## Naming the Application or Module:

   `npm run name-module -- --name <my-module>`<br />
   `npm add *`<br />
   `npm commit -m "renamed module"`<br />
  
## Deployment

There are two options for deployment.

1. Publish to local file system<br/>
  `npm run publish-local` - publishes from the `dist` folder to `c:\packages`. <br />
  
  The folder can be customized using a `dest` parameter:<br/>
  `npm run publish-local -- --dest c:\path\to\my-module`
  
2. Publish to npm<br/>
  `npm publish`<br/>
  Follow the publish instructions from npm: https://docs.npmjs.com/getting-started/publishing-npm-packages
  

## Installing your Published Module

If you published locally:<br />
`npm install c:\path\to\my-module --save`

If you published to npm:<br />
`npm install my-module --save`



