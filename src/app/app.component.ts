import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title: string;
  todos: Todo[];
  sub1: Subcription;
  sub2: Subcription;
  constructor(private http: HttpClient) {
    this.title = 'Hello World!';
    this.todos = [];
    this.sub1 = this.http.get<Todo[]>('http://localhost:3000/todos').subscribe(t => {
      this.todos = t;
    })
  }

  add(name: string) {
     this.sub2 = this.http.post<Todo>('http://localhost:3000/todos', { id: 0, name: name}).subscribe(t=> {
       this.todos.push(t);
     });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}
