import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextboxComponent } from './widgets/textbox/textbox.component';

import { LabelComponent } from './widgets/label/label.component';
import { TableComponent } from './widgets/table/table.component';
import { GroupComponent } from './widgets/group/group.component';
import { DynamicModule } from '../dynamic/dynamic.module';
import { TextboxOptionsComponent } from './options/widgets/textbox-options/textbox-options.component';
import { LabelOptionsComponent } from './options/widgets/label-options/label-options.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    DynamicModule
  ],
  declarations: [
    TextboxComponent,
    TextboxOptionsComponent,
    LabelComponent,
    TableComponent,
    GroupComponent,
    LabelOptionsComponent
  ],
  exports: [
    TextboxComponent,
    TextboxOptionsComponent,
    LabelComponent,
    LabelOptionsComponent,
    TableComponent
  ]
})
export class ControlsModule { }
