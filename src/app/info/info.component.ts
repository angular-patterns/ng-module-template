import { Component, OnInit } from '@angular/core';
import { LibConfig } from '../models/lib-config';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private config: LibConfig) {
    alert(config.url);
   }

  ngOnInit() {
  }

}
