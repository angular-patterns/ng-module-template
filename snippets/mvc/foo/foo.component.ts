import { Component, OnInit } from '@angular/core';
import {  MyService } from '../data/my.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  title: string;
  description: string;
  constructor(private myService: MyService) {
    this.title = myService.title;
    this.description = myService.description;   
  }

  ngOnInit() {
  }

}