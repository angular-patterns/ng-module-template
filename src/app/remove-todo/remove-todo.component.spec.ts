import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { RemoveTodoComponent } from './remove-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../core/todo.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { defer } from 'rxjs';
import { Predicate, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
export function getElement<T>(fixture: ComponentFixture<T>, predicate: Predicate<DebugElement>) {
  return fixture.debugElement.query(predicate);
}

describe('RemoveTodoComponent', () => {
  let component: RemoveTodoComponent;
  let fixture: ComponentFixture<RemoveTodoComponent>;

  beforeEach(() => {
    
    const todoService =  jasmine.createSpyObj('TodoService', ['remove']);
    const modalService = jasmine.createSpyObj('BsModalService', ['show'] );
    

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ RemoveTodoComponent ],
      providers: [
        { provide: TodoService, useValue: todoService },
        { provide: BsModalService, useValue: modalService }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should remove todo', 
    inject([TodoService],  (todoService:TodoService)=> {
      component.modalRef = jasmine.createSpyObj('BsModalRef', ['hide']);

      component.todo = { id: 1, title: 'test'};
      component.ok();

      expect(todoService.remove).toHaveBeenCalledWith(component.todo.id);
      expect(component.modalRef.hide).toHaveBeenCalled();
    })
  );

  it ('should call openModal on click', () => {
    const button = getElement(fixture, By.css('button[type="button"]'));
    spyOn(component, 'openModal');
    button.triggerEventHandler('click', null);
    expect(component.openModal).toHaveBeenCalled();
  });

  it ('should show modal',
    inject([BsModalService], (modalService: BsModalService) => {
      const bsModalRef = jasmine.createSpyObj('BsModalRef', ['hide']);
      (<any>modalService.show).and.returnValue(bsModalRef);
      
      let template = {};
        
      component.openModal(template);
      expect(modalService.show).toHaveBeenCalledWith(template);
      expect(component.modalRef).toBe(bsModalRef);

    
   })
  );
  it ('should cancel modal', ()=> {
    component.modalRef = jasmine.createSpyObj('BsModalRef', ['hide']);
    component.cancel();
    expect(component.modalRef.hide).toHaveBeenCalled();
  })
});
