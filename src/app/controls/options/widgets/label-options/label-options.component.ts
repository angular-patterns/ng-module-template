import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LabelOptions, LabelSize } from '../../../models/label.options';



@Component({
  selector: 'app-label-options',
  templateUrl: './label-options.component.html',
  styleUrls: ['./label-options.component.css']
})
export class LabelOptionsComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() options: LabelOptions;
  selectedSize: string;
  sizeOptions: string[];
  constructor() { 
    this.sizeOptions = [
      LabelSize.H1,
      LabelSize.H2,
      LabelSize.H3,
      LabelSize.H4,
      LabelSize.H5,
    ];
  }

  ngOnInit() {
    if (this.formGroup) {
      this.formGroup.setControl('text', new FormControl(this.options.text));
      this.formGroup.setControl('size', new FormControl(this.options.size));
      this.selectedSize = this.options.size;
    }
  }
  ngOnChanges() {    
    this.formGroup.setControl('text', new FormControl(this.options.text));
    this.formGroup.setControl('size', new FormControl(this.options.size));
    this.selectedSize = this.options.size;
  }
  selectSize(size: string) {
    this.selectedSize = size;
    this.formGroup.setControl('size', new FormControl(this.selectedSize));
  }
}
