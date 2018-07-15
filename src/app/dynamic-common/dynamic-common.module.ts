import { NgModule, ModuleWithProviders, Type, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModule as NgDynamicModule } from 'ng-dynamic-component';
import { WidgetTemplateComponent } from './widget-template/widget-template.component';
export const ngDynamicModule = NgDynamicModule.withComponents([]);

@NgModule({
  imports: [
    CommonModule,
    ngDynamicModule
  ],
  declarations: [WidgetTemplateComponent],
  exports: [WidgetTemplateComponent]
})
export class DynamicCommonModule { 
  static withComponents(components: Type<any>[]): ModuleWithProviders {
    return {
      ngModule: DynamicCommonModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: components }
      ]
    }
  }
}
