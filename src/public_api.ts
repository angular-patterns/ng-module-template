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
export { Widget, Portal, PortalConfig, Message} from './app/model/model';
export * from './app/portal/portal.component';
export * from './app/widget/widget-container.component';
export * from './app/widget/message.service';
export * from './app/providers/portal.factory';
export * from './app/providers/portal.provider';
export * from './app/providers/widget.factory';
export * from './app/providers/widget.provider';



// This file only reexports content of the `src` folder. Keep it that way.
// This is a hack to prevent people from turning on strictNullChecks. See #15432

export declare interface ɵStrictNullChecksNotSupported {

  dontUseStrictNullChecksWithAngularYetSeeIssue15432: string|null;

  [key: string]: string;

}