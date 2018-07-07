import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextboxComponent } from './widgets/textbox/textbox.component';
import { TextboxOptionsComponent } from './options/textbox-options/textbox-options.component';
import { LabelComponent } from './widgets/label/label.component';
import { TableComponent } from './widgets/table/table.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [
    TextboxComponent,
    TextboxOptionsComponent,
    LabelComponent,
    TableComponent
  ],
  exports: [
    TextboxComponent,
    TextboxOptionsComponent,
    LabelComponent,
    TableComponent
  ]
})
export class ControlsModule { }
