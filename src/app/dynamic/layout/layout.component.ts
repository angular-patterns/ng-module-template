import { Component, OnInit, Input, Type, SimpleChanges, OnChanges, Injector, ReflectiveInjector } from '@angular/core';
import { Layout } from '../shared/layout.model';
import { FormService } from '../form.service';
import { FormGroupService } from '../form/form-group.service';
import { FormGroup } from '@angular/forms';
import { Section } from '../shared/section.model';



@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [

  ]
})
export class LayoutComponent implements OnInit, OnChanges {
  @Input() model: Layout;
  @Input() section: Section;
  component: Type<any>;
  layoutInjector: Injector;
  formGroup: FormGroup;
  constructor(private formService: FormService, private formDataService: FormGroupService, private injector: Injector) {

  }


  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.model != null && this.model.key != '') {
      let layoutRef = this.formService.getLayout(this.model.key);
      this.component = layoutRef.component;
      this.formGroup = <FormGroup>this.formDataService.root.get(this.section.scope);

      this.layoutInjector = ReflectiveInjector.resolveAndCreate([
        { provide: Layout, useFactory: () => this.model },
        { provide: Section, useFactory: () => this.section },
        { provide: FormGroup, useFactory: () => this.formGroup }
      ], this.injector);
    }
  }
}
