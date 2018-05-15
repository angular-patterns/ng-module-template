import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../core/todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA, Predicate, DebugElement } from '@angular/core';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { defer } from 'rxjs';
import { By } from '@angular/platform-browser';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
export function getElement<T>(fixture: ComponentFixture<T>, predicate: Predicate<DebugElement>) {
  return fixture.debugElement.query(predicate);
}
export function getAll<T>(fixture: ComponentFixture<T>, predicate: Predicate<DebugElement>) {
  return fixture.debugElement.queryAll(predicate);
}


describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: TodoService;

  beforeEach(() => {
    todoService =  new TodoService(null);
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ TodoListComponent ],
      providers: [
        { provide: TodoService, useValue: todoService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should initialize observables', () => {
    
    const q$ = cold('---x|', []);

    spyOnProperty(todoService, 'todos$', 'get').and.returnValue(q$);
    
    expect(component.todos$).toBeTruthy();
    expect(component.empty$).toBeTruthy();

  });

  it ('should render empty list', () => {
    const q$ = cold('---x|', []);
    spyOnProperty(todoService, 'todos$', 'get').and.returnValue(q$);

    getTestScheduler().flush(); // flush the observables

    fixture.detectChanges(); // update view

    const elements = getAll(fixture, By.css('table tr'));
    expect(elements.length).toBe(2);

    expect(elements[0].nativeElement.innerText).toBe('emtpy');
    
  });


});
