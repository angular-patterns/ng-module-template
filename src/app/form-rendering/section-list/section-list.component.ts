import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
  }
  navigate(t: string) {
    //this.router.navigate(['../',{outlets: { render: [t] }}], { relativeTo: this.route});
  }

}
