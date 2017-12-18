import { Component, OnInit } from '@angular/core';
import { code } from '../code';

alert(code.main.language);

@Component({
    selector: 'code',
    templateUrl: 'code.component.html'
})

export class CodeComponent implements OnInit {
    content: string;
    language: string;

    constructor() { 
        this.content = code.main.content;
        this.language = 'html';
    }

    ngOnInit() { }
}