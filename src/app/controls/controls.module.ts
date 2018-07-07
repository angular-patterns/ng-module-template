import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextboxComponent } from './widgets/textbox/textbox.component';
import { TextboxOptionsComponent } from './options/textbox-options/textbox-options.component';
import { LabelComponent } from './widgets/label/label.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TextboxComponent,
    TextboxOptionsComponent,
    LabelComponent
  ],
  exports: [
    TextboxComponent,
    TextboxOptionsComponent,
    LabelComponent
  ]
})
export class ControlsModule { }
