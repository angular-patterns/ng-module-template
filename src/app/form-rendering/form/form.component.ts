import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Form } from '../../form-core/models/form.model';
import { NavigationService } from '../../form-core/services/navigation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: Observable<Form>;
  constructor(private route: ActivatedRoute, private navigationService: NavigationService) {
    navigationService.initFormRoute(route); 
    this.form = route.data.pipe(map(t=>t.form));
  }

  ngOnInit() {
  }

}
