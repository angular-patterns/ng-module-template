import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  route: ActivatedRoute;
  constructor(private router: Router) { }

  initRoute(route: ActivatedRoute) {
    this.route = route;
  }

  navigate(section: string) {
    this.router.navigate(['../', section], {relativeTo: this.route});
  }

}
