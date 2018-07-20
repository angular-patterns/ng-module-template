import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextboxComponent } from './textbox/textbox.component';
import { LabelComponent } from './label/label.component';
import { TableComponent } from './table/table.component';
import { GroupComponent } from './group/group.component';
import { DynamicModule } from '../../framework/dynamic/dynamic.module';


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
