import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'test',
    template: `
    This is a test component
    `
})

export class TestComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}