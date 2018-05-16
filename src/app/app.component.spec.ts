import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { TodoService } from './core/todo.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    const todoService =  jasmine.createSpyObj('TodoService', ['load']);
    

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([])
      ],
      declarations: [ AppComponent ],
      providers: [
        { provide: TodoService, useValue: todoService },
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  }));

  it('should call load on Init',
    inject([TodoService], (todoService: TodoService)=> {
      fixture.detectChanges();
      expect(todoService.load).toHaveBeenCalled();
    })
  );

});

