import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { TodoService } from './core/todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RemoveTodoComponent } from './remove-todo/remove-todo.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [ AppComponent, TodoListComponent, AddTodoComponent, RemoveTodoComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  providers: [
    TodoService
  ]
})
export class AppModule {
}
