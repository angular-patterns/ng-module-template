import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { FormService } from '../form.service';
import { Section } from '../models/form.model';
import { DropZoneService } from '../../../dynamic/utilities/drop-zone/drop-zone.service';
import { FormGroup } from '@angular/forms';
import { OptionsDialogService } from '../../../dynamic/services/options-dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers: [ OptionsDialogService ]
})
export class SectionComponent implements OnInit, OnChanges, OnDestroy {
  @Input() formGroup: FormGroup;
  section: Section; 
  subscriptions: Subscription[];
  constructor(private formService: FormService, private dropZoneService: DropZoneService, private optionsDialogService: OptionsDialogService) {
    this.subscriptions = [];
    const s1 = this.formService.events.init$.subscribe(t=> {
      if (t.sections.length > 0)
        this.section = t.sections[0];
    });
    const s2 = this.formService.events.section.current$.subscribe(t=> {
      this.section = t;
    });
    const s3 = this.dropZoneService.drop$.subscribe(t=> {
      this.formService.addWidget(t.widget);
    });
    const s4 = this.optionsDialogService.remove$.subscribe(t=> {
      this.formService.removeWidget(t.options);
    });
    const s5 = this.optionsDialogService.update$.subscribe(t=> {
      let index = this.section.widgets.findIndex(x=>x.options == t.oldOptions);   
      if (index >= 0) {
        this.formService.updateOptions(t.oldOptions, t.newOptions);  

      } 
    });
    this.subscriptions = [ s1,s2,s3,s4,s5];
  }

  ngOnInit() {
    if (this.formService.store.currentSection != null) {
      this.section = this.formService.store.currentSection;
    }
  }
  ngOnChanges() {
    if (this.formService.store.currentSection != null) {
      this.section = this.formService.store.currentSection;
    }

  }
  ngOnDestroy() {
    this.subscriptions.forEach(t=> {
      t.unsubscribe();
    });
  }

}
