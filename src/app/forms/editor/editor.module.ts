import { NgModule } from '@angular/core';
import { FormService } from './form.service';
import { DndModule } from 'ng2-dnd';

import { EditorRoutingModule } from './editor-routing.module';

export const dndModule = DndModule.forRoot();


@NgModule({
  imports: [

    EditorRoutingModule
  ],
  declarations: [  ],
  exports: [
    
  ],
  providers: [
    FormService
  ]
})
export class EditorModule { }
