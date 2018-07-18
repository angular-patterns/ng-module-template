import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private formService: FormService) { 
    this.formGroup = this.formService.store.formGroup;
    this.formService.events.init$.subscribe(t=> {
      this.formGroup = this.formService.store.formGroup;
    });
  }

  ngOnInit() {
  }
  submit() {
    alert(JSON.stringify(this.formGroup.value));
  }
  save() {
    alert(JSON.stringify(this.formService.store.form));
  }

}
