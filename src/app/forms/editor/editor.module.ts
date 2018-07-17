import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { SectionListComponent } from './section-list/section-list.component';
import { FormService } from './form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionComponent } from './section/section.component';
import { ToolsMenuComponent } from './tools-menu/tools-menu.component';
import { DndModule } from 'ng2-dnd';
import { DynamicModule } from '../../dynamic/dynamic.module';

export const dndModule = DndModule.forRoot();

@NgModule({
  imports: [
    CommonModule,
    DynamicModule,
    FormsModule,  
    ReactiveFormsModule,
    dndModule
  ],
  declarations: [EditorComponent, SectionListComponent, SectionComponent, ToolsMenuComponent],
  exports: [
    EditorComponent
  ],
  providers: [
    FormService
  ]
})
export class EditorModule { }
