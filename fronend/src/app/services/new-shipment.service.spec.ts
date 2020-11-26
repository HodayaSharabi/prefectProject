import { TestBed } from '@angular/core/testing';

import { NewShipmentService } from './new-shipment.service';

describe('NewShipmentService', () => {
  let service: NewShipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewShipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
