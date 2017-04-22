import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDashboardPageComponent } from './default-dashboard-page.component';

describe('DefaultDashboardPageComponent', () => {
  let component: DefaultDashboardPageComponent;
  let fixture: ComponentFixture<DefaultDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
