import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'test',
    templateUrl: 'test.component.html'
})

export class TestComponent implements OnInit {
    @Input() name: string;
    constructor() { }

    ngOnInit() { }
}