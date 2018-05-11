import { Component, OnInit } from '@angular/core';
import { Widget } from '../../dynamic/shared/widget.model';

@Component({
    selector: 'label',
    templateUrl: 'label-editor.component.html'
})

export class LabelEditorComponent implements OnInit {
    edit: boolean;
    cache: string;
    constructor(private widget: Widget) { 
        this.edit = false;
    }

    ngOnInit() { }

    onEdit() {
        this.cache = this.widget.data.name;
        this.edit = true;
    }

    onOk(value: string) {
        this.widget.data.name = value;
        this.edit = false;
    }
    onCancel() {
        this.cache = null;
        this.edit = false;
    }
}