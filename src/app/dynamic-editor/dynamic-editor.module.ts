import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicCoreModule } from '../dynamic-core/dynamic-core.module';
import { EditorComponent } from './editor/editor.component';
import { SectionListComponent } from './section-list/section-list.component';
import { FormService } from './form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DynamicCoreModule,
    FormsModule,  
    ReactiveFormsModule
  ],
  declarations: [EditorComponent, SectionListComponent],
  exports: [
    EditorComponent
  ],
  providers: [
    FormService
  ]
})
export class DynamicEditorModule { }
