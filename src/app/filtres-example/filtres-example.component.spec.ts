import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltresExampleComponent } from './filtres-example.component';

describe('FiltresExampleComponent', () => {
  let component: FiltresExampleComponent;
  let fixture: ComponentFixture<FiltresExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltresExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltresExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
