import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../form-core/services/navigation.service';

@Component({
  selector: 'app-form-rendering',
  templateUrl: './form-rendering.component.html',
  styleUrls: ['./form-rendering.component.css']
})
export class FormRenderingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private navigationService: NavigationService) { 
    console.log('route is' + route);
    navigationService.initRoute(route);
  }

  ngOnInit() {
  }

}
