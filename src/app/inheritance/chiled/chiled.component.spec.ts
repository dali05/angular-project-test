import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiledComponent } from './chiled.component';

describe('ChiledComponent', () => {
  let component: ChiledComponent;
  let fixture: ComponentFixture<ChiledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
