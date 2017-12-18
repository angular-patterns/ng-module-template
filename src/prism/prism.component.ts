import { Component, Input, OnInit, ElementRef, AfterViewInit ,ViewChild } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
    selector: 'prism',
    templateUrl: 'prism.component.html'
})
export class PrismComponent implements OnInit {
    @Input() content: string;
    @Input() language: string;
    formattedContent: string;
    constructor() {
        
    }

    ngOnInit() {
        this.formattedContent = Prism.highlight(this.content, Prism.languages[this.language]);
    }
    
}
