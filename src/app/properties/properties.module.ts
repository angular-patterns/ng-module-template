import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxPropertiesComponent } from './text-box-properties/text-box-properties.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TextBoxPropertiesComponent],
  exports: [TextBoxPropertiesComponent]
})
export class PropertiesModule { }
