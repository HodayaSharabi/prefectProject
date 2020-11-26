import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOperationsInRealTimeComponent } from './shipping-operations-in-real-time.component';

describe('ShippingOperationsInRealTimeComponent', () => {
  let component: ShippingOperationsInRealTimeComponent;
  let fixture: ComponentFixture<ShippingOperationsInRealTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingOperationsInRealTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingOperationsInRealTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
