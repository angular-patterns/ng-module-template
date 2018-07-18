import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPreviewComponent } from './json-preview.component';

describe('JsonPreviewComponent', () => {
  let component: JsonPreviewComponent;
  let fixture: ComponentFixture<JsonPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
