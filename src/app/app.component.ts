import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sa-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  principles: Observable<any[]>;
  constructor(private http:HttpClient) {
      this.principles = http.get<any[]>('http://localhost:3000/principles');
  }
}
