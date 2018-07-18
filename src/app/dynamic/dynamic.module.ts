import { NgModule, ModuleWithProviders, Type, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModule as NgDynamicModule } from 'ng-dynamic-component';
import { DndModule } from 'ng2-dnd';
import { WidgetTemplateComponent } from './utilities/widget-template/widget-template.component';
import { DropZoneComponent } from './utilities/drop-zone/drop-zone.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetRef, widgetRefToken } from './models/widget.model';
import { WidgetLookupService } from './services/widget-lookup.service';
import { DropZoneService } from './utilities/drop-zone/drop-zone.service';
import { OptionsDialogComponent } from './utilities/options-dialog/options-dialog.component';
import { WidgetFactory } from './services/widget.factory';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OptionsFactory } from './services/options.factory';
import { IdService } from './services/id.service';

export const ngDynamicModule = NgDynamicModule.withComponents([]);
export const dndModule = DndModule.forRoot();
@NgModule({
  imports: [
    CommonModule,
    ngDynamicModule,
    dndModule, 
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    WidgetTemplateComponent,
    DropZoneComponent,
    WidgetComponent,
    OptionsDialogComponent
  ],
  exports: [
    DropZoneComponent,
    WidgetComponent,
    OptionsDialogComponent
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
        OptionsFactory,
        { provide: widgetRefToken, useValue: components },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: components }
      ]
    }
  }
}