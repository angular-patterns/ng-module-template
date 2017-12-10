import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sa-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  general: Observable<any[]>;
  angular: Observable<any[]>;
  constructor(private http:HttpClient) {
      this.general = http.get<any[]>('http://localhost:3000/general-principles');
      this.angular = http.get<any[]>('http://localhost:3000/angular-principles');
  }
}
