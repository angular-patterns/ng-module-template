import { Component, OnInit } from '@angular/core';
import { TodoService } from './core/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  constructor(private todoService: TodoService) {
    this.title = 'Hello World!';    
  }

  ngOnInit() {
    this.todoService.load();
  }

}
