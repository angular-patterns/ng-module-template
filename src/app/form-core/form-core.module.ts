import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavigationService } from './services/navigation.service';
import { FormService } from './services/form.service';
import { LibConfig } from './lib-config';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
  ]
})
export class FormCoreModule {
  static forRoot(url: LibConfig): ModuleWithProviders {
    return {
        ngModule: FormCoreModule,
        providers: [
          NavigationService,
          FormService,
          { provide: LibConfig, useValue: url }
        ]
    };

  } 
}
