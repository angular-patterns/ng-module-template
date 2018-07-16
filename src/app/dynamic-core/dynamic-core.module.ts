import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetRef, widgetRefToken } from './widget.model';
import { WidgetComponent } from './widget/widget.component';
import { DynamicCommonModule } from '../dynamic-common/dynamic-common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetLookupService } from './widget-lookup.service';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicCommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    WidgetComponent,
    FormComponent
  ],
  declarations: [
    WidgetComponent,
    FormComponent
  ]
})
export class DynamicCoreModule {
  static withComponents(components: WidgetRef[]): ModuleWithProviders {
    return {
      ngModule: DynamicCoreModule,
      providers: [
        WidgetLookupService,
        { provide: widgetRefToken, useValue: components },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: components }
      ]
    }
  }
}
