import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsModule } from '../controls/controls.module';

import { groupOptionsSchema } from '../shared/controls-common/schemas/group-options.schema';
import { groupOptionsDefaults } from './defaults/group-options.defaults';
import { labelOptionsSchema } from '../shared/controls-common/schemas/label-options.schema';
import { labelOptionsDefaults } from './defaults/label-options.defaults';
import { LabelOptionsComponent } from './options/label-options/label-options.component';
import { textboxOptionsSchema } from '../shared/controls-common/schemas/textbox-options.schema';
import { textboxOptionsDefaults } from './defaults/textbox-options.defaults';
import { TextboxOptionsComponent } from './options/textbox-options/textbox-options.component';
import { tableOptionsSchema } from '../shared/controls-common/schemas/table-options.schema';
import { tableOptionsDefaults } from './defaults/table-options.defaults';

import { DynamicOptionsModule } from '../dynamic-options/dynamic-options.module';
import { GroupComponent } from './controls/group/group.component';
import { LabelComponent } from './controls/label/label.component';
import { TableComponent } from './controls/table/table.component';
import { TextboxComponent } from './controls/textbox/textbox.component';

@NgModule({
  imports: [
    CommonModule,
    ControlsModule,
    DynamicOptionsModule
  ],
  declarations: [
    GroupComponent,
    LabelComponent,
    TableComponent,
    TextboxComponent,
    LabelOptionsComponent,
    TextboxOptionsComponent
  ],
  exports: [
    GroupComponent,
    LabelComponent,
    TableComponent,
    TextboxComponent,
    LabelOptionsComponent,
    TextboxOptionsComponent
  ]
})
export class EditableControlsModule {

}
