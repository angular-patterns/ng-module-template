import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'modal-outlet',
    template: `
        <router-outlet name="modal"></router-outlet>
    `
})

export class ModalOutletComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}