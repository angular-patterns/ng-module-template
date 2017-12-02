import { Component, OnInit, Input } from '@angular/core';
import { Guide } from '../guide.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CategoryEnum } from '../category-enum.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'sg-guide',
    templateUrl: 'guide.component.html',
    styleUrls: [
        'guide.component.css'
    ],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
              style({opacity: 0}),
              animate(10)
            ]),
            transition('* => void', [
              animate(10, style({opacity:100})) 
            ])
          ])    
    ]
})

export class GuideComponent implements OnInit {
    categoryEnum = CategoryEnum;

    @Input() model:Guide;
    constructor(private route: ActivatedRoute) {
        this.model =  this.route.snapshot.data['data'];
        
     }

    ngOnInit() { }
}