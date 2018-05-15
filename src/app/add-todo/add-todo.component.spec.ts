import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { AddTodoComponent } from './add-todo.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { defer } from 'rxjs';
import { TodoService } from '../core/todo.service';
import { By } from '@angular/platform-browser';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { DebugElement, Predicate } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
export function getElement<T>(fixture: ComponentFixture<T>, predicate: Predicate<DebugElement>) {
  return fixture.debugElement.query(predicate);
}

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;
  let todoService: TodoService;
  let modalService: BsModalService;
  let bsModalRef: BsModalRef;


  beforeEach(() => {
    bsModalRef = jasmine.createSpyObj('BsModalRef', ['hide']);
    todoService =  jasmine.createSpyObj('TodoService', ['load', 'add']);
    modalService = jasmine.createSpyObj('BsModalService', ['show'] );
    (<any>modalService.show).and.returnValue(bsModalRef);

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ AddTodoComponent ],
      providers: [
        { provide: TodoService, useValue: todoService },
        { provide: BsModalService, useValue: modalService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it ('should initialize an empty form', () => {
    expect(component.formGroup).toBeTruthy();

    const control = component.formGroup.get('title');
    expect(control.value).toEqual('');
    expect(control.hasError('required')).toBe(true);
  });
  it ('should call openModal on click', () => {

    const button = getElement(fixture, By.css('button[type="button"]'));
    spyOn(component, 'openModal');

    button.triggerEventHandler('click', null);
    expect(component.openModal).toHaveBeenCalled();
  });
  it ('should clear form before opening modal', () => {
    const controlBefore = component.formGroup.get('title');
    controlBefore.setValue('test');

    const button = getElement(fixture, By.css('button[type="button"]'));

    button.triggerEventHandler('click', null);
    const controlAfter = component.formGroup.get('title');
    expect(controlAfter.value).toEqual('');

  });
  it ('should add todo when form is valid', () => {
    const formGroup = new FormGroup({
      title: new FormControl('')
    });
    component.modalRef = bsModalRef;

    component.onSubmit(formGroup);

    expect(todoService.add).toHaveBeenCalled();
    expect(bsModalRef.hide).toHaveBeenCalled();
  });

});
