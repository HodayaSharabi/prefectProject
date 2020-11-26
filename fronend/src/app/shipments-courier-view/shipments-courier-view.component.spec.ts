import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsCourierViewComponent } from './shipments-courier-view.component';

describe('ShipmentsCourierViewComponent', () => {
  let component: ShipmentsCourierViewComponent;
  let fixture: ComponentFixture<ShipmentsCourierViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentsCourierViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsCourierViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
