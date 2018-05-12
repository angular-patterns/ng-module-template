import { Component, OnInit, Injector, ReflectiveInjector } from '@angular/core';
import { Widget } from '../shared/widget.model';
import { FormGroup } from '@angular/forms';
import { FormService } from '../form.service';
import { InjectFlags } from '@angular/core';
import { FormGroupService } from '../form/form-group.service';
import { SkipSelf } from '@angular/core';

@Component({
  selector: 'group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [
      { provide: FormGroup, useValue: new FormGroup({}) }
  ]
})
export class GroupComponent implements OnInit {
  content: Widget;
  constructor(private formGroup:FormGroup, @SkipSelf() private parentFormGroup: FormGroup,  private widget:Widget, private formService:FormService, private formGroupService: FormGroupService) {
    parentFormGroup.registerControl(widget.settings.id, formGroup);

    this.content = widget.settings.content; 
    this.formService.removeWidget$.subscribe(t=> {
      if (this.content == t) {
        this.content = null;
        this.widget.settings.content = null;
        parentFormGroup.removeControl(this.widget.settings.id);
      }   
   
    })
   }

  ngOnInit() {
  }
  onDrop($event) {
    this.content = this.formService.createWidget($event.dragData);;
    this.widget.settings.content = this.content;
  }

}
