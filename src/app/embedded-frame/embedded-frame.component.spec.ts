import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedFrameComponent } from './embedded-frame.component';

describe('EmbeddedFrameComponent', () => {
  let component: EmbeddedFrameComponent;
  let fixture: ComponentFixture<EmbeddedFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbeddedFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
