import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Form } from '../models/form.model';
import { Section } from '../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  route: ActivatedRoute;
  constructor(private router: Router) { 

  }

  initFormRoute(route: ActivatedRoute) {
    this.route = route;
  }

  navigate(section: string) {
    if (this.route == null)
      throw new Error('Route for navigation service is not initialized');
    this.router.navigate(['./', section], {relativeTo: this.route});
  }

  getForm(): Form {
    return this.route.snapshot.data.form;
  }
  getSection(): Section {
    return this.route.firstChild.snapshot.data.section;
  }

}
