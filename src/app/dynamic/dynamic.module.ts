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

@Component({
  selector: '.form-group',
  template: `
    <ng-content></ng-content>
    <div *ngIf="form && form.control && form.control.invalid">
  
        <span class="label label-danger" *ngIf="form.control.errors.required">Required</span>
        <span class="label label-danger" *ngIf="form.control.errors.maxlength">Length exceeds maximum</span>
        <span class="label label-danger" *ngIf="form.control.errors.minlength">Does not meet required length</span>
        <span class="label label-danger" *ngIf="form.control.errors.notstring">String cannot be bobby</span>
    </div>
  `
})

export class ValidatorComponent implements OnInit, AfterContentInit {
  @ContentChild(FormControlName) form;
  constructor() { }

  ngOnInit() { }

  ngAfterContentInit() {

  }
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule,
    DragulaModule,
    DndModule.forRoot()

  ],
  declarations: [
    LayoutComponent, 
    WidgetComponent, 
    FormComponent, 
    SectionComponent, 
    SectionListComponent, 
    ValidatorComponent,
    TableComponent,
    WidgetListComponent,
    WidgetOutletComponent,
    ControlComponent,
    GroupComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LayoutComponent, 
    WidgetComponent, 
    FormComponent, 
    SectionComponent, 
    SectionListComponent,
    ValidatorComponent,
    TableComponent,
    WidgetListComponent,
    WidgetOutletComponent,
    ControlComponent, 
    GroupComponent
  ]
})
export class DynamicModule { 
  public static withComponents(config: Config): ModuleWithProviders {
    config.widgets.push({ name: 'Table', component: TableComponent, key: 'table', type: WidgetType.Other })
    config.widgets.push({ name: 'Group', component: GroupComponent, key: 'group', type: WidgetType.Other })
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
