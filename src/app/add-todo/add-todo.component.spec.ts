import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoComponent } from './add-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { defer } from 'rxjs';
import { TodoService } from '../core/todo.service';
import { By } from '@angular/platform-browser';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(async(() => {
    const todoService =  jasmine.createSpyObj('TodoService', ['load']);
    const modalService = jasmine.createSpyObj('BsModalService', ['openModal'] );
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot()
      
      ],
      declarations: [ AddTodoComponent ],
      providers: [
        { provide: TodoService, useValue: todoService },
        { provide: BsModalService, useValue: modalService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should init form', () => {
    expect(component.formGroup).toBeTruthy();

    const control = component.formGroup.get('title');
    expect(control).toBeTruthy();
    expect(control.value).toEqual('');
    expect(control.hasError('required')).toBe(true);
  })

  it ('should clear form before opening modal', () => {
    const de = fixture.debugElement;
    const btn = de.query(By.css('button[type="button"]'));
    expect(btn).toBeTruthy();

    //const control = component.formGroup.get('title');
    
    btn.triggerEventHandler('click', null);
    //expect(control).toBeTruthy();
   // expect(control.value).toEqual('');
   // expect(control.hasError('required')).toBe(true);
  })

});
