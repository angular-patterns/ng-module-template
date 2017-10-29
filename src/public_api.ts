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

export * from './app/app.module';
export * from './app/inbox/inbox-widget.component';
export * from './app/widget/widget.component';
export * from './app/widgets/inbox.widget';
export * from './app/widgets/address.widget';
export * from './app/widgets/app.widget';
export * from './app/widgets/edoc.widget';
export * from './app/widgets/inquiry.widget';
export * from './app/widgets/rfr.widget';
export * from './app/widgets/scholarship.widget';
export * from './app/widget/widget.model';


// This file only reexports content of the `src` folder. Keep it that way.
// This is a hack to prevent people from turning on strictNullChecks. See #15432

export declare interface ɵStrictNullChecksNotSupported {

  dontUseStrictNullChecksWithAngularYetSeeIssue15432: string|null;

  [key: string]: string;

}