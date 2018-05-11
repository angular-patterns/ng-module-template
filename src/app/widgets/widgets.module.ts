import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './text-box/text-box.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UtilitiesModule } from '../utilities/utilities.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UtilitiesModule
  ],
  declarations: [TextBoxComponent],
  exports: [TextBoxComponent]
})
export class WidgetsModule { }
