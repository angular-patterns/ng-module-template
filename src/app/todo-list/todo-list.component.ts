import { Component, OnInit } from '@angular/core';
import { TodoService } from '../core/todo.service';
import { Observable, pipe } from 'rxjs';
import { Todo } from '../models/todo.model';
import { map, tap, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;
  empty$: Observable<boolean>;
  constructor(private todoService: TodoService) {
    this.todos$ = todoService.todos$;
    this.empty$ = this.todos$.pipe(
      map(t => t.length === 0)
    );
  }

  ngOnInit() {
  }

}
