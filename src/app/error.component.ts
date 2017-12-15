import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'error',
    template:`
<modal-dialog>
    <div modal-title>Error</div>
    <div modal-body>
        Oops, something went wrong!
    </div>
    
</modal-dialog>
    `
})

export class ErrorComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}