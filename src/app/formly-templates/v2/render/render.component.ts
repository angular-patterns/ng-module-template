import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { NavigationService } from '../../../form-core/services/navigation.service';
import { Section } from '../../../form-core/models/section.model';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  section: Section;

  constructor(private navigationService: NavigationService) {
    this.section = navigationService.getSection();
    console.log(this.section);
    
  }

  submit(model) {
    console.log(model);
  }
  ngOnInit() {
  }

}
