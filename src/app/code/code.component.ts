import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../data';

@Component({
    selector: 'sa-code',
    templateUrl: 'code.component.html'
})

export class CodeComponent implements OnInit {
    @Input() code: any;
    constructor(private route: ActivatedRoute) {
        route.parent.params.subscribe(t => {
            const id = t.id;
            this.code = data.concepts.filter(x => x.id === id)[0].code;
        });

    }
    ngOnInit() { }
}
