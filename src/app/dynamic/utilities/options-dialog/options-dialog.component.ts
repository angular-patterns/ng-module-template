import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../../../forms/editor/form.service';
import { OptionsDialogService } from '../../services/options-dialog.service';


@Component({
  selector: '[optionsDialog]',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.css'],
  host: {'[attr.optionsDialog]': 'optionsDialog ? optionsDialog : null'}
})
export class OptionsDialogComponent implements OnInit {
  @Input('optionsDialog') options: any;
  constructor(private optionsDialogService: OptionsDialogService) { }

  ngOnInit() {
  }
  onRemove() {
    this.optionsDialogService.onRemove(this.options);
  }
  onSettings() {
    this.optionsDialogService.onSettings(this.options);
  }
}
