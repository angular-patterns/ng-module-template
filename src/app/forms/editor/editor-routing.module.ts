import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './routing/main/main.component';
import { EditorComponent } from './editor/editor.component';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionComponent } from './section/section.component';
import { ToolsMenuComponent } from './tools-menu/tools-menu.component';
import { DndModule } from 'ng2-dnd';
import { CommonModule } from '@angular/common';
import { DynamicModule } from '../../dynamic/dynamic.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainSectionComponent } from './routing/main-section/main-section.component';
import { MainPreviewComponent } from './routing/main-preview/main-preview.component';
import { MainModelComponent } from './routing/main-model/main-model.component';
import { JsonPreviewComponent } from './routing/json-preview/json-preview.component';


const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: '', redirectTo: 'editor'},
    { path: 'editor', component: MainSectionComponent },
    { path: 'preview', component: MainPreviewComponent },
    { path: 'definition', component: JsonPreviewComponent },
    { path: 'model', component: MainModelComponent },
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    DynamicModule,
    FormsModule,  
    ReactiveFormsModule,
    DndModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [ JsonPreviewComponent, MainModelComponent, MainPreviewComponent, MainComponent, MainSectionComponent, EditorComponent,SectionComponent,  SectionListComponent, ToolsMenuComponent,]
})
export class EditorRoutingModule { }
