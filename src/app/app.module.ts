import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicModule } from './dynamic/dynamic.module';
import { EditorModule } from './forms/editor/editor.module';
import { DndModule } from 'ng2-dnd';

import { ControlsModule } from './controls/controls.module';
import { TextboxComponent as PreviewTextboxComponent } from './controls/textbox/textbox.component';
import { LabelComponent as PreviewLabelComponent } from './controls/label/label.component';
import { TableComponent as PreviewTableComponent } from './controls/table/table.component';
import { GroupComponent as PreviewGroupComponent } from './controls/group/group.component';

import { EditableControlsModule } from './editable-controls/editable-controls.module';
import { TextboxComponent } from './editable-controls/controls/textbox/textbox.component';
import { LabelComponent } from './editable-controls/controls/label/label.component';
import { TableComponent } from './editable-controls/controls/table/table.component';
import { GroupComponent } from './editable-controls/controls/group/group.component';

import { DynamicOptionsModule } from './dynamic-options/dynamic-options.module';
import { groupOptionsSchema } from './shared/schemas/group-options.schema';
import { labelOptionsSchema } from './shared/schemas/label-options.schema';
import { textboxOptionsSchema } from './shared/schemas/textbox-options.schema';
import { tableOptionsSchema } from './shared/schemas/table-options.schema';
import { groupOptionsDefaults } from './shared/defaults/group-options.defaults';
import { labelOptionsDefaults } from './shared/defaults/label-options.defaults';
import { textboxOptionsDefaults } from './shared/defaults/textbox-options.defaults';
import { tableOptionsDefaults } from './shared/defaults/table-options.defaults';
import { LabelOptionsComponent } from './editable-controls/options/label-options/label-options.component';
import { TextboxOptionsComponent } from './editable-controls/options/textbox-options/textbox-options.component';
import { CoreModule } from './core/core.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TestComponent } from './test/test.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { passwordOptionsDefaults } from './shared/defaults/password.options.default';



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
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    DynamicModule.withComponents([
      { name: 'Textbox', component: TextboxComponent },
      { name: 'Label',  component: LabelComponent },
      { name: 'Table', component: TableComponent },
      { name: 'Group', component: GroupComponent },
      { name: 'Test', component: TestComponent },
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
    PreviewTextboxComponent,
    PreviewLabelComponent,
    PreviewTableComponent,
    PreviewGroupComponent
  ]
})
export class AppModule {
}
