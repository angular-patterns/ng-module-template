import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelOptionsComponent } from './options/label-options/label-options.component';
import { TextboxOptionsComponent } from './options/textbox-options/textbox-options.component';


import { DynamicOptionsModule } from '../dynamic-options';
import { ControlsModule } from '../controls';
import { EditableGroupComponent } from './controls/editable-group/editable-group.component';
import { EditableLabelComponent } from './controls/editable-label/editable-label.component';
import { EditableTableComponent } from './controls/editable-table/editable-table.component';
import { EditableTextboxComponent } from './controls/editable-textbox/editable-textbox.component';


@NgModule({
  imports: [
    CommonModule,
    ControlsModule,
    DynamicOptionsModule
  ],
  declarations: [
    EditableGroupComponent,
    EditableLabelComponent,
    EditableTableComponent,
    EditableTextboxComponent,
    LabelOptionsComponent,
    TextboxOptionsComponent
  ],
  exports: [
    EditableGroupComponent,
    EditableLabelComponent,
    EditableTableComponent,
    EditableTextboxComponent,
    LabelOptionsComponent,
    TextboxOptionsComponent
  ]
})
export class EditableControlsModule {

}
