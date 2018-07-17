import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GroupOptions } from '../../models/group.options';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() options: GroupOptions;
  innerGroup: FormGroup;
  constructor() { }

  ngOnInit() {
    if (this.formGroup != null){
      this.innerGroup = new FormGroup({});
      this.formGroup.addControl(this.options.name, this.innerGroup);
    }
  }

}
