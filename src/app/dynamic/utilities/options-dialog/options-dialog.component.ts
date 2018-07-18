import { Component, OnInit, Input, TemplateRef, Type, EventEmitter, Output, OnChanges } from '@angular/core';
import { FormService } from '../../../forms/editor/form.service';
import { OptionsDialogService } from '../../services/options-dialog.service';
import { FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { WidgetLookupService } from '../../services/widget-lookup.service';


@Component({
  selector: '[optionsDialog]',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.css'],
  //host: {'[attr.optionsDialog]': 'optionsDialog ? optionsDialog : null'}
})
export class OptionsDialogComponent implements OnInit, OnChanges {
  @Input() options: any;
  @Output() optionsChange: EventEmitter<any>;
  @Input() component: string;
  @Input() title: string;
  formGroup: FormGroup;
  modalRef: BsModalRef;
  optionsComponent: Type<any>;
  constructor(private widgetLookupService: WidgetLookupService, private optionsDialogService: OptionsDialogService,  private modalService: BsModalService) { 
    this.formGroup = new FormGroup({});
    this.optionsChange = new EventEmitter<any>();
  }

  ngOnInit() {
    if (this.component) {
      let widgetRef = this.widgetLookupService.find(this.component);
      this.optionsComponent = widgetRef.settingsComponent;
    }
  }
  ngOnChanges() {
    let widgetRef = this.widgetLookupService.find(this.component);
    this.optionsComponent = widgetRef.settingsComponent;
  }

  onRemove() {
    this.optionsDialogService.onRemove(this.options);
  }
  onSettings(template: TemplateRef<any>) {
    this.optionsDialogService.onSettings(this.options);
    this.modalRef = this.modalService.show(template);
  }


 onSubmit(f: FormGroup){
   this.optionsDialogService.onUpdate(this.options, f.value);
   this.modalRef.hide();
 }
}
