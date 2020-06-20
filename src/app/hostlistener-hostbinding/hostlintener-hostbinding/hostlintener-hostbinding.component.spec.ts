import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlintenerHostbindingComponent } from './hostlintener-hostbinding.component';

describe('HostlintenerHostbindingComponent', () => {
  let component: HostlintenerHostbindingComponent;
  let fixture: ComponentFixture<HostlintenerHostbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostlintenerHostbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlintenerHostbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
