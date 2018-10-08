import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Form } from '../models/form.model';
import { Section } from '../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public formRoute: ActivatedRoute;
  public sectionRoute: ActivatedRoute;
  constructor(private router: Router) { 

  }

  initFormRoute(route: ActivatedRoute) {
    this.formRoute = route;
  }
  initSectionRoute(route: ActivatedRoute) {
    this.sectionRoute = route;
  }

  navigate(section: string) {
    if (this.formRoute == null)
      throw new Error('Route for navigation service is not initialized');
    this.router.navigate(['./', section], {relativeTo: this.formRoute});
  }

  getForm(): Form {
    return this.formRoute.snapshot.data.form;
  }
  getSection(): Section {
    return this.sectionRoute.snapshot.data.section;
  }

}
