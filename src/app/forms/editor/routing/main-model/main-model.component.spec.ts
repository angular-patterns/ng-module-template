import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainModelComponent } from './main-model.component';

describe('MainModelComponent', () => {
  let component: MainModelComponent;
  let fixture: ComponentFixture<MainModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
