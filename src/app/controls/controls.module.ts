import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextboxComponent } from './widgets/textbox/textbox.component';
import { TextboxOptionsComponent } from './options/textbox-options/textbox-options.component';
import { LabelComponent } from './widgets/label/label.component';
import { TableComponent } from './widgets/table/table.component';
import { DynamicCoreModule } from '../dynamic-core/dynamic-core.module';
import { GroupComponent } from './widgets/group/group.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    DynamicCoreModule
  ],
  declarations: [
    TextboxComponent,
    TextboxOptionsComponent,
    LabelComponent,
    TableComponent,
    GroupComponent
  ],
  exports: [
    TextboxComponent,
    TextboxOptionsComponent,
    LabelComponent,
    TableComponent
  ]
})
export class ControlsModule { }
