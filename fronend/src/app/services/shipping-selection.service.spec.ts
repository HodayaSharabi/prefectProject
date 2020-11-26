import { TestBed } from '@angular/core/testing';

import { ShippingSelectionService } from './shipping-selection.service';

describe('ShippingSelectionService', () => {
  let service: ShippingSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
