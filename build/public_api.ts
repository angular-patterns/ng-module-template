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
export * from './src/model/portal.model';
export * from './src/model/user-portal.model';
export * from './src/model/user-widget.model';
export * from './src/model/widget.model';
export * from './src/portal/portal.component';
export * from './src/providers/portal/portal.factory';
export * from './src/providers/portal/portal.provider';
export * from './src/providers/user/user-portal.provider';
export * from './src/providers/widget/widget.factory';
export * from './src/providers/widget/widget.provider';
export * from './src/user/user-portal.component';
export * from './src/widget/widget.component';
export * from './src/widget-container/widget-container.component';

// This file only reexports content of the `src` folder. Keep it that way.
// This is a hack to prevent people from turning on strictNullChecks. See #15432

export declare interface ɵStrictNullChecksNotSupported {

  dontUseStrictNullChecksWithAngularYetSeeIssue15432: string|null;

  [key: string]: string;

}