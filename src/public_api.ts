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
export * from './app/model/portal.model';
export * from './app/model/user-portal.model';
export * from './app/model/user-widget.model';
export * from './app/model/widget.model';
export * from './app/portal/portal.component';
export * from './app/providers/portal/portal.factory';
export * from './app/providers/portal/portal.provider';
export * from './app/providers/user-portal/user-portal.provider';
export * from './app/providers/widget/widget.factory';
export * from './app/providers/widget/widget.provider';
export * from './app/user-portal/user-portal.component';
export * from './app/widget/widget.component';
export * from './app/widget-container/widget-container.component';
export * from './app/widget-host/widget-host.directive';

// This file only reexports content of the `src` folder. Keep it that way.
// This is a hack to prevent people from turning on strictNullChecks. See #15432

export declare interface ɵStrictNullChecksNotSupported {

  dontUseStrictNullChecksWithAngularYetSeeIssue15432: string|null;

  [key: string]: string;

}