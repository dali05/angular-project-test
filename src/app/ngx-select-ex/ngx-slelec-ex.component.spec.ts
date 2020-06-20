import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSlelecExComponent } from './ngx-slelec-ex.component';

describe('NgxSlelecExComponent', () => {
  let component: NgxSlelecExComponent;
  let fixture: ComponentFixture<NgxSlelecExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSlelecExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSlelecExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
