import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxPropertiesComponent } from './text-box-properties/text-box-properties.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorsModule } from '../validators/validators.module';
import { TablePropertiesComponent } from './table-properties/table-properties.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ValidatorsModule
  ],
  declarations: [TextBoxPropertiesComponent, TablePropertiesComponent],
  exports: [TextBoxPropertiesComponent]
})
export class PropertiesModule { }
