import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../form.service';
import { Section } from '../models/form.model';
import { DropZoneService } from '../../../dynamic/utilities/drop-zone/drop-zone.service';
import { FormGroup } from '@angular/forms';
import { OptionsDialogService } from '../../../dynamic/services/options-dialog.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers: [ OptionsDialogService ]
})
export class SectionComponent implements OnInit {
  @Input() formGroup: FormGroup;
  section: Section; 
  constructor(private formService: FormService, private dropZoneService: DropZoneService, private optionsDialogService: OptionsDialogService) {
    this.formService.events.init$.subscribe(t=> {
      if (t.sections.length > 0)
        this.section = t.sections[0];
    });
    this.formService.events.section.current$.subscribe(t=> {
      this.section = t;
    });
    this.dropZoneService.drop$.subscribe(t=> {
      this.formService.addWidget(t.widget);
    });
    this.optionsDialogService.remove$.subscribe(t=> {
      this.formService.removeWidget(t.options);
    });
    this.optionsDialogService.update$.subscribe(t=> {
      let index = this.section.widgets.findIndex(x=>x.options == t.oldOptions);   
      if (index >= 0) {
        this.formService.updateOptions(t.oldOptions, t.newOptions);  

      } 
    });

  }

  ngOnInit() {
  }


}
