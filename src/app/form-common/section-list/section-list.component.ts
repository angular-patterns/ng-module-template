import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, debounceTime } from 'rxjs/operators';
import { NavigationService } from '../../form-core/services/navigation.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private navigationService: NavigationService) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      debounceTime(40000)
    ).subscribe(
      x => {
      console.log('val',x);
      //this.router.navigate(['/']); /*Redirect to Home*/
    });
  }

  ngOnInit() {
  }
  navigate(t: string) {
    console.log(this.route);
    //this.router.navigate(['./form',t ], { relativeTo: this.route});
    this.navigationService.navigate(t);
  }

}
