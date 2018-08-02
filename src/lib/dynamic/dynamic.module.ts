import { NgModule, ModuleWithProviders, Type, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DndModule } from 'ng2-dnd';

import { WidgetRef, widgetRefToken } from './shared';
import { WidgetLookupService } from './services/widget-lookup.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicModule as NgDynamicModule } from 'ng-dynamic-component';
import { DropZoneService } from './services/drop-zone.service';
import { FormGroupService } from './services/form-group.service';
import { DropZoneComponent } from './components/drop-zone/drop-zone.component';
import { WidgetTemplateComponent } from './components/widget-template/widget-template.component';
import { WidgetComponent } from './components/widget/widget.component';
import { IdService } from './utils/id.service';
import { WidgetFactory } from './services/widget.factory';

export const dndModule = DndModule.forRoot();

@NgModule({
  imports: [
    CommonModule,
    dndModule, 
    FormsModule,
    ReactiveFormsModule,
    NgDynamicModule.withComponents([])

  ],
  declarations: [
    DropZoneComponent,
    WidgetTemplateComponent,
    WidgetComponent,
  ],
  exports: [
    DropZoneComponent,
    WidgetTemplateComponent,
    WidgetComponent
  ]
})
export class DynamicModule { 
  static withComponents(components: WidgetRef[]): ModuleWithProviders {
    return {
      ngModule: DynamicModule,
      providers: [
        IdService,
        DropZoneService,
        WidgetLookupService,
        WidgetFactory,
        FormGroupService,
        { provide: widgetRefToken, useValue: components },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: components }
      ]
    }
  }
}