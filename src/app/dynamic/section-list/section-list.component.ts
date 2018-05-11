import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../shared/section.model';

@Component({
  selector: 'section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  @Input() model: Section[];
  constructor() { }

  ngOnInit() {
  }

}
