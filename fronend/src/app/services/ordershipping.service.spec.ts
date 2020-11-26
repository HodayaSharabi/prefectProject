import { TestBed } from '@angular/core/testing';

import { OrdershippingService } from './ordershipping.service';

describe('OrdershippingService', () => {
  let service: OrdershippingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdershippingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
