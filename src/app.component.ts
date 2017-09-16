import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feature',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public name: string = 'Angular';
  public ngOnInit() {
    console.log('called');
  }
}
