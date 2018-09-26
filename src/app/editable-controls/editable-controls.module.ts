import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsModule } from '../controls/controls.module';

import { groupOptionsSchema } from '../shared/schemas/group-options.schema';
import { groupOptionsDefaults } from '../shared/defaults/group-options.defaults';
import { labelOptionsSchema } from '../shared/schemas/label-options.schema';
import { labelOptionsDefaults } from '../shared/defaults/label-options.defaults';
import { LabelOptionsComponent } from './options/label-options/label-options.component';
import { textboxOptionsSchema } from '../shared/schemas/textbox-options.schema';
import { textboxOptionsDefaults } from '../shared/defaults/textbox-options.defaults';
import { TextboxOptionsComponent } from './options/textbox-options/textbox-options.component';
import { tableOptionsSchema } from '../shared/schemas/table-options.schema';
import { tableOptionsDefaults } from '../shared/defaults/table-options.defaults';

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
    TextboxOptionsComponent,
  ],
  exports: [
    GroupComponent,
    LabelComponent,
    TableComponent,
    TextboxComponent,
    LabelOptionsComponent,
    TextboxOptionsComponent,
  ],
  entryComponents: [
  ]
})
export class EditableControlsModule {

}
