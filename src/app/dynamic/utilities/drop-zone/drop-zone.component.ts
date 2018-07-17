import { Component, OnInit, Input } from '@angular/core';
import { DropZoneService } from './drop-zone.service';

@Component({
  selector: '[drop-zone]',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.css'],
  host: {'[attr.drop-zone]': 'drop-zone ? drop-zone : null'}
})
export class DropZoneComponent implements OnInit {
  @Input('drop-zone') args: any;
  constructor(private dropZoneService: DropZoneService) {

  }

  ngOnInit() {
  }
  
  onDrop($event) {
  
    this.dropZoneService.acceptDrop($event.dragData, this.args);
 }


}
