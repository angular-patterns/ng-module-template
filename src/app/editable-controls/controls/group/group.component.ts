import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { GroupOptions } from '../../../shared/controls-common/models/group.options';
import { DropZoneService } from '../../../dynamic/services/drop-zone.service';


@Component({
  selector: 'ec-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [ DropZoneService ]
})
export class GroupComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() options: GroupOptions;
  constructor() { 

  }

  ngOnInit() {

  }

}
