import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';
import { RenderData } from '../models/render-data.model';


@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions;
  model: any;
  form: FormGroup;


  constructor(private route: ActivatedRoute) {
    this.fields = [];
    this.options = {};
    this.model = {};
    this.form = new FormGroup({});
      route.data.map(t=>t.renderData).subscribe(t=> {
          this.fields = t.fields;
          this.options = t.options;
          this.model = t.model;
          this.form = t.form;
      });
  }

  submit(model) {
    console.log(model);
  }
  ngOnInit() {
  }

}

