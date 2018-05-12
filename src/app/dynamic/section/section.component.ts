import { Component, OnInit,Input } from '@angular/core';
import { Section } from '../shared/section.model';
import { FormGroupService } from '../form/form-group.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import 'rxjs/add/operator/map';
@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  model: Section;
  @Input() formGroup: FormGroup;

  constructor(private formDataService: FormGroupService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.formGroup = formDataService.root;
    this.activatedRoute.params.map(t=>t.id).subscribe(t=> {
      //this.model = this.formDataService.form.sections.find(x=>x.key == t);
    });
    //if(!this.activatedRoute.snapshot.params.id)
    //  router.navigate([`./sections/${this.formDataService.form.sections[0].key}`]);
  }

  ngOnInit() {
  }

}
