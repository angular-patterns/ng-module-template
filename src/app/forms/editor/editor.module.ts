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

import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MainComponent } from './routing/main/main.component';
import { EditorRoutingModule } from './editor-routing.module';
import { MainSectionComponent } from './routing/main-section/main-section.component';
import { MainPreviewComponent } from './routing/main-preview/main-preview.component';
import { MainModelComponent } from './routing/main-model/main-model.component';
import { JsonPreviewComponent } from './routing/json-preview/json-preview.component';

export const dndModule = DndModule.forRoot();


@NgModule({
  imports: [

    EditorRoutingModule
  ],
  declarations: [   TestComponent ],
  exports: [
    
  ],
  providers: [
    FormService
  ]
})
export class EditorModule { }
