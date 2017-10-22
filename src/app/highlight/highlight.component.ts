import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Item } from '../models/item.model';


export interface PartIndex {
    lo: number,
    hi: number
}

export interface Part {
    text: string,
    highlight: boolean
}

@Component({
    selector: '.highlight',
    templateUrl: 'highlight.component.html',
    styleUrls: [
        'highlight.component.css'
    ]
})

export class HighlightComponent implements OnChanges {
    @Input() item: Item;
    parts: Part[];

    constructor() {
        this.parts = [];
    }

    ngOnChanges() {
        this.parts = [];
        if (this.item.Highlight.trim() == '') {
            this.parts.push({
                text: this.item.Text,
                highlight: false
            });
        }
        else {

            var partIndexes = this.item.Highlight.split(',').map(t => {
                var pair = t.split('-');
                return {
                    lo: parseInt(pair[0]),
                    hi: parseInt(pair[1])
                }
            });

            var last = partIndexes.reduce((p: PartIndex, c: PartIndex) => {
                if (p != null) {
                    this.parts.push({
                        text: this.item.Text.substring(p.hi, c.lo),
                        highlight: false
                    });
                }
                if (p == null && c.lo > 0) {
                    this.parts.push({
                        text: this.item.Text.substring(0, c.lo),
                        highlight: false
                    });
                }

                this.parts.push({
                    text: this.item.Text.substring(c.lo, c.hi),
                    highlight: true
                });
                return c;
            }, null);

            if (last != null && last.hi < this.item.Text.length) {
                this.parts.push({
                    text: this.item.Text.substring(last.hi),
                    highlight: false
                });
            }
        }
    }
}