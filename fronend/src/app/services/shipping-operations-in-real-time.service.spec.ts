import { TestBed } from '@angular/core/testing';

import { ShippingOperationsInRealTimeService } from './shipping-operations-in-real-time.service';

describe('ShippingOperationsInRealTimeService', () => {
  let service: ShippingOperationsInRealTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingOperationsInRealTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
