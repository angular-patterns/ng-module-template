/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @module
 * @description
 * Entry point for all public APIs of the core package.
 */

<<<<<<< HEAD:build/public_api.ts
export * from './src/app.module';
export * from './src/weather/weather.component';
=======
export * from './app/app.module';
>>>>>>> 7710e127929f8a445b65a4f4080ed0e307688fb2:src/public_api.ts

// This file only reexports content of the `src` folder. Keep it that way.
// This is a hack to prevent people from turning on strictNullChecks. See #15432

export declare interface ɵStrictNullChecksNotSupported {

  dontUseStrictNullChecksWithAngularYetSeeIssue15432: string|null;

  [key: string]: string;

}