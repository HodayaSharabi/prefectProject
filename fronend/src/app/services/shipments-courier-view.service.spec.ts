import { TestBed } from '@angular/core/testing';

import { ShipmentsCourierViewService } from './shipments-courier-view.service';

describe('ShipmentsCourierViewService', () => {
  let service: ShipmentsCourierViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentsCourierViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
