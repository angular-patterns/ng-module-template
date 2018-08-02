import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';
import { DynamicModule } from '../dynamic/dynamic.module';

import { OptionsLookupService } from './services/options-lookup.service';
import { OptionsDialogComponent } from './components/options-dialog/options-dialog.component';
import { Options, optionsToken } from './shared';
import { OptionsFactory } from './services/options.factory';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicModule,
    ModalModule
  ],
  declarations: [
    OptionsDialogComponent
  ],
  exports: [
    OptionsDialogComponent,
    DynamicModule
  ]
})
export class DynamicOptionsModule {
  static withOptions(options: Options[]): ModuleWithProviders {
    return {
      ngModule: DynamicOptionsModule,
      providers: [
        OptionsLookupService,
        OptionsFactory,
        { provide: optionsToken, useValue: options },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: options }
      ]
    }
  }
 }
