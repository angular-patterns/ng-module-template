import { NgModule,ModuleWithProviders,ANALYZE_FOR_ENTRY_COMPONENTS, Component, ContentChild, OnInit, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { Config, ConfigToken } from './shared/config.model';
import { FormService } from './form.service';
import { WidgetComponent } from './widget/widget.component';
import { FormComponent } from './form/form.component';
import { SectionComponent } from './section/section.component';
import { SectionListComponent } from './section-list/section-list.component';
import { FormRoutingModule } from './form/form-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControlName} from '@angular/forms';
import { FormGroupService } from './form/form-group.service';
import { TableComponent } from './tools/table/table.component';
import { WidgetType } from './shared/widget-ref.model';
import { WidgetListComponent } from './tools/widget-list/widget-list.component';
import { WidgetOutletComponent } from './widget-outlet/widget-outlet.component';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import {DndModule} from 'ng2-dnd';
import { ControlComponent } from './control/control.component';
import { GroupComponent } from './group/group.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfigComponent } from './config/config.component';
import { ValidatorsModule } from '../validators/validators.module';
import { DynamicModule as MyDynamicModule } from 'ng-dynamic-component';
import { TablePropertiesComponent } from '../properties/table-properties/table-properties.component';
import { WidgetSettings } from './shared/widget-settings.model';
import { TableSettings } from '../properties/table-properties/table-settings.model';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule,
    DragulaModule,
    DndModule.forRoot(),
    ModalModule.forRoot(),
    ValidatorsModule,
    MyDynamicModule.withComponents([])

  ],
  declarations: [
    LayoutComponent, 
    WidgetComponent, 
    FormComponent, 
    SectionComponent, 
    SectionListComponent, 
    TableComponent,
    WidgetListComponent,
    WidgetOutletComponent,
    ControlComponent,
    GroupComponent,
    ConfigComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LayoutComponent, 
    WidgetComponent, 
    FormComponent, 
    SectionComponent, 
    SectionListComponent,
    TableComponent,
    WidgetListComponent,
    WidgetOutletComponent,
    ControlComponent, 
    GroupComponent,
    ConfigComponent
  ]
})
export class DynamicModule { 
  public static withComponents(config: Config): ModuleWithProviders {
    config.widgets.push(
      { 
        key: 'table', 
        name: 'Table', 
        component: TableComponent, 
        settings: {
          component: TablePropertiesComponent,
          defaults: {
            id: 0, 
            rows:2,
            cols: 3,
            widgets: []
          }
        },
        initialize(settings: WidgetSettings) {
          let tableSettings = settings as TableSettings;
          let newSettings = {
            id: FormService.generateId(this.key),
            rows: tableSettings.rows,
            cols: tableSettings.cols,
            widgets: [...tableSettings.widgets]
          }
          for (var i = 0; i < newSettings.rows; ++i) {
            newSettings.widgets.push([]);
          }
          return newSettings;
       },
        type: WidgetType.Other 
      })
    config.widgets.push(
      { 
        name: 'Group', 
        component: GroupComponent, 
        key: 'group', 
        type: WidgetType.Other 
      })
    return {
      ngModule: DynamicModule,
      providers: [
        FormService,
        FormGroupService,
        { provide: ConfigToken, useValue: config },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: config}
      ]
    }
  }
}
