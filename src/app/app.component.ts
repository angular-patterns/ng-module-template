import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  todos: Todo[];
  constructor(private http: HttpClient) {
    this.title = 'Hello World!';
    this.todos = [];
    this.http.get<Todo[]>('http://localhost:3000/todos').subscribe(t => {
      this.todos = t;
    })
  }

  add(name: string) {
     this.http.post<Todo>('http://localhost:3000/todos', { id: 0, name: name}).subscribe(t=> {
       this.todos.push(t);
     });
  }
}
