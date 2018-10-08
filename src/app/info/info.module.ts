import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { LibConfig } from '../models/lib-config';

@NgModule({
  imports: [
    CommonModule,
    InfoRoutingModule
  ],
  declarations: [

  ]
})
export class InfoModule {
  public static forRoot(config: LibConfig) : ModuleWithProviders {
    return {
      ngModule: InfoModule,
      providers: [
        { provide: LibConfig, useValue: config }
      ]
    }
  } 
}
