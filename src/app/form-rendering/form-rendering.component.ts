import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-rendering',
  templateUrl: './form-rendering.component.html',
  styleUrls: ['./form-rendering.component.css']
})
export class FormRenderingComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    console.log('route is' + route);
  }

  ngOnInit() {
  }

}
