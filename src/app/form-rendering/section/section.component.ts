import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../form-core/services/navigation.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private navigationService: NavigationService) { 
    navigationService.initRoute(route);
  }

  ngOnInit() {
  }

}
