import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetOutletComponent } from './widget-outlet.component';

describe('WidgetOutletComponent', () => {
  let component: WidgetOutletComponent;
  let fixture: ComponentFixture<WidgetOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
