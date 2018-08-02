import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';


import { CoreModule } from './core/core.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TestComponent } from './test/test.component';
import { ControlsModule, groupOptionsSchema, labelOptionsSchema, textboxOptionsSchema, tableOptionsSchema, TextboxComponent, LabelComponent, TableComponent, GroupComponent } from '../lib/controls';
import { EditableControlsModule, groupOptionsDefaults, labelOptionsDefaults, textboxOptionsDefaults, tableOptionsDefaults, LabelOptionsComponent, TextboxOptionsComponent, EditableTextboxComponent, EditableLabelComponent, EditableTableComponent, EditableGroupComponent } from '../lib/editable-controls';
import { DynamicModule } from '../lib/dynamic';
import { DynamicOptionsModule } from '../lib/dynamic-options';


export const dndModule = DndModule.forRoot();

@NgModule({
  imports:      [ 
    CoreModule,
    BrowserModule, 
    AppRoutingModule, 
    ControlsModule, 
    EditableControlsModule,
    FormsModule, 
    ReactiveFormsModule,
    dndModule,
    ModalModule.forRoot(),
    DynamicModule.withComponents([
      { name: 'Textbox', component: EditableTextboxComponent },
      { name: 'Label',  component: EditableLabelComponent },
      { name: 'Table', component: EditableTableComponent },
      { name: 'Group', component: EditableGroupComponent },
      { name: 'Test', component: TestComponent }
    ]),
    DynamicOptionsModule.withOptions([
      { name: 'Group', schema: groupOptionsSchema, default: groupOptionsDefaults, component: null },
      { name: 'Label', schema: labelOptionsSchema, default: labelOptionsDefaults, component: LabelOptionsComponent },
      { name: 'Textbox', schema: textboxOptionsSchema, default: textboxOptionsDefaults, component: TextboxOptionsComponent },
      { name: 'Table', schema: tableOptionsSchema, default: tableOptionsDefaults, component: null },
      { name: 'Test', schema: {}, default: {}, component: null },
    ])

  ],
  declarations: [ AppComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  entryComponents: [
    TextboxComponent,
    LabelComponent,
    TableComponent,
    GroupComponent
  ]
})
export class AppModule {
}
