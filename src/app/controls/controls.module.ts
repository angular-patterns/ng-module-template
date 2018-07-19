import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicModule } from '../dynamic/dynamic.module';
import { TextboxComponent } from './textbox/textbox.component';
import { LabelComponent } from './label/label.component';
import { TableComponent } from './table/table.component';
import { GroupComponent } from './group/group.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    DynamicModule
  ],
  declarations: [
    TextboxComponent,
    LabelComponent,
    TableComponent,
    GroupComponent
  ],
  exports: [
    TextboxComponent,
    LabelComponent,
    TableComponent,
    GroupComponent,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class ControlsModule { }
