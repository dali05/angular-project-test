import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTabPanelComponent } from './main-tab-panel.component';

describe('MainTabPanelComponent', () => {
  let component: MainTabPanelComponent;
  let fixture: ComponentFixture<MainTabPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTabPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
