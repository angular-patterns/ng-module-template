import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelOptionsComponent } from './label-options.component';

describe('LabelOptionsComponent', () => {
  let component: LabelOptionsComponent;
  let fixture: ComponentFixture<LabelOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
