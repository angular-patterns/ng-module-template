import { Component, Input, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { GroupOptions } from "../../shared/models/group.options";



@Component({
  selector: 'co-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [  ]
})
export class GroupComponent implements OnInit, OnChanges, OnDestroy {
  @Input() formGroup: FormGroup;
  @Input() options: GroupOptions;
  innerGroup: FormGroup;
  constructor() { 

  }

  ngOnInit() {
    if (this.formGroup != null){
      this.innerGroup = new FormGroup({});
      this.formGroup.setControl(this.options.model, this.innerGroup);
    }
  }
  ngOnChanges() {
    if (this.formGroup != null){
      this.innerGroup = new FormGroup({});
      this.formGroup.setControl(this.options.model, this.innerGroup);
    }
  }
  ngOnDestroy() {
    this.formGroup.removeControl(this.options.model);
  }

}
