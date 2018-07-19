import { NgModule, ModuleWithProviders, Type, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DndModule } from 'ng2-dnd';
import { WidgetComponent } from './widget/widget.component';
import { WidgetRef, widgetRefToken } from './models/widget.model';
import { WidgetLookupService } from './services/widget-lookup.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetTemplateComponent } from './utilities/widget-template/widget-template.component';
import { DynamicModule as NgDynamicModule } from 'ng-dynamic-component';
import { DropZoneService } from './services/drop-zone.service';
import { DropZoneComponent } from './utilities/drop-zone/drop-zone.component';
import { FormGroupService } from './services/form-group.service';

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
        DropZoneService,
        WidgetLookupService,
        FormGroupService,
        { provide: widgetRefToken, useValue: components },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: components }
      ]
    }
  }
}