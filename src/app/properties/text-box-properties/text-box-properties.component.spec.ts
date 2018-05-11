import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxPropertiesComponent } from './text-box-properties.component';

describe('TextBoxPropertiesComponent', () => {
  let component: TextBoxPropertiesComponent;
  let fixture: ComponentFixture<TextBoxPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
