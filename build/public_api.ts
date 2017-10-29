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

export * from './src/app.module';
export * from './src/inbox/inbox-widget.component';
export * from './src/widget/widget.component';
export * from './src/widgets/inbox.widget';
export * from './src/widgets/address.widget';
export * from './src/widgets/app.widget';
export * from './src/widgets/edoc.widget';
export * from './src/widgets/inquiry.widget';
export * from './src/widgets/rfr.widget';
export * from './src/widgets/scholarship.widget';
export * from './src/widget/widget.model';


// This file only reexports content of the `src` folder. Keep it that way.
// This is a hack to prevent people from turning on strictNullChecks. See #15432

export declare interface ɵStrictNullChecksNotSupported {

  dontUseStrictNullChecksWithAngularYetSeeIssue15432: string|null;

  [key: string]: string;

}