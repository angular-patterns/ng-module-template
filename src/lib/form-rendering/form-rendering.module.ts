import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import { FormRenderingComponent } from './form-rendering.component';
import { FormlyCommonModule } from '../formly-common/formly-common.module';

@NgModule({
  imports: [
    CommonModule,
    FormlyCommonModule,
    FormlyModule.forChild()
  ],
  declarations: [
    FormRenderingComponent
  ],
  exports: [
    FormRenderingComponent
  ]
})
export class FormRenderingModule {
  public static forRoot() : ModuleWithProviders {
    return {
      ngModule: FormRenderingModule,
      providers: [
        FormlyModule.forRoot().providers
      ]
    }
  }
}
