import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxOptionsComponent } from './textbox-options.component';

describe('TextboxOptionsComponent', () => {
  let component: TextboxOptionsComponent;
  let fixture: ComponentFixture<TextboxOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
