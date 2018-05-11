import { NgModule } from '@angular/core';

import { LabelEditorComponent } from './label-editor/label-editor.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [LabelEditorComponent],
    declarations: [LabelEditorComponent],
    providers: [],
})
export class UtilitiesModule { }
