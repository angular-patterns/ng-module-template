import { Component, OnInit, Input } from '@angular/core';
import { Guide } from "../guide.model";

@Component({
    selector: 'sg-guide',
    templateUrl: 'guide.component.html',
    styleUrls: [
        'guide.component.css'
    ]
})

export class GuideComponent implements OnInit {
    @Input() model:Guide;
    constructor() { }

    ngOnInit() { }
}