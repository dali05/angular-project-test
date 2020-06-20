import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsontableJSComponent } from './handsontable-js.component';

describe('HandsontableJSComponent', () => {
  let component: HandsontableJSComponent;
  let fixture: ComponentFixture<HandsontableJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandsontableJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandsontableJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
