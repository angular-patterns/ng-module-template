import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';
import { Section } from '../../../form-core/models/section.model';
import { NavigationService } from '../../../form-core/services/navigation.service';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  section: Section;

  constructor(private navigationService: NavigationService) {
    navigationService.sectionRoute.params.subscribe(t=> {
      this.section = navigationService.getSection();
      console.log(this.section);
  
    });
    
  }

  submit(model) {
    console.log(model);
  }
  ngOnInit() {
  }

}

