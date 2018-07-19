import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Options, optionsToken } from './models/options.model';

import { OptionsLookupService } from './services/options-lookup.service';
import { OptionsDialogComponent } from './controls/options-dialog/options-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicModule } from '../dynamic/dynamic.module';
import { ModalModule } from 'ngx-bootstrap/modal';


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
        { provide: optionsToken, useValue: options },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: options }
      ]
    }
  }
 }
