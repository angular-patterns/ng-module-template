import { NgModule, ModuleWithProviders, Type, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModule } from 'ng-dynamic-component';
import { WidgetTemplateComponent } from './widget-template/widget-template.component';
export const ngDynamicModule = DynamicModule.withComponents([]);

@NgModule({
  imports: [
    CommonModule,
    ngDynamicModule
  ],
  declarations: [WidgetTemplateComponent],
  exports: [WidgetTemplateComponent]
})
export class CoreModule { 
  static withComponents(components: Type<any>[]): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: components }
      ]
    }
  }
}
