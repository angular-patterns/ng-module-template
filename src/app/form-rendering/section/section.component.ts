import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Section } from '../../form-core/models/section.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavigationService } from '../../form-core/services/navigation.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  section: Observable<Section>;
  constructor(private route: ActivatedRoute, private navigationService:NavigationService) { 
    navigationService.initSectionRoute(route); 
    this.section = route.data.pipe(map(t=>t.section));
  }

  ngOnInit() {
  }

}
