import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayToDayDeliveriesComponent } from './day-to-day-deliveries.component';

describe('DayToDayDeliveriesComponent', () => {
  let component: DayToDayDeliveriesComponent;
  let fixture: ComponentFixture<DayToDayDeliveriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayToDayDeliveriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayToDayDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
