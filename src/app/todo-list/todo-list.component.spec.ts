import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

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

  beforeEach(() => {
    const todoService =  new TodoService(null);
    const q$ = cold('---x|', { x: [] });
    spyOnProperty(todoService, 'todos$', 'get').and.returnValue(q$);

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
    expect(component.todos$).toBeTruthy();
    expect(component.empty$).toBeTruthy();

  });

  it ('should render empty list and show message',
    inject([TodoService], (todoService: TodoService) => {
      getTestScheduler().flush(); // flush the observables
      fixture.detectChanges(); // update view
      const elements = getAll(fixture, By.css('tr'));
      expect(elements.length).toBe(2);
      expect(elements[1].nativeElement.innerText).toEqual('The list is empty'); 
    })
  );
});


describe('TodoListComponent With Data', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(() => {
    const todoService =  new TodoService(null);
    const q$ = cold('---x|', { x: [{id: 1, title: 'test'}] });
    spyOnProperty(todoService, 'todos$', 'get').and.returnValue(q$);

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

  it ('should not show empty message',
  inject([TodoService], (todoService: TodoService) => {
    getTestScheduler().flush(); // flush the observables
    fixture.detectChanges(); // update view
    const elements = getAll(fixture, By.css('tbody tr'));
    expect(elements.length).toBe(1);
    expect(elements[0].nativeElement.innerText).not.toEqual('The list is empty'); 

    const tds = elements[0].queryAll(By.css('td'));
    expect(tds.length).toBe(3);
    expect(tds[0].nativeElement.innerText).toBe('1');
    expect(tds[1].nativeElement.innerText).toBe('test');
    })
  );


});

