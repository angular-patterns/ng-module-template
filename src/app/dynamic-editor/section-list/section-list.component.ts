import { Component, OnInit } from '@angular/core';
import { Section } from '../models/form.model';
import { FormService } from '../form.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  formGroup: FormGroup;
  sections: Section[];
  constructor(private formService: FormService) { 
    this.formGroup = new FormGroup({
      'title': new FormControl('')
    });
    this.formService.events.init$.subscribe(t=> {
      this.sections = t.sections;
    });
  }

  ngOnInit() {
  }

  addSection() {
    if (this.formGroup.valid) {
      this.formService.addSection(this.formGroup.get('title').value);
      this.formGroup.get('title').reset('');
    }
  }

}
