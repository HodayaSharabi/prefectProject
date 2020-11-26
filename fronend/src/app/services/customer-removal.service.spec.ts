import { TestBed } from '@angular/core/testing';

import { CustomerRemovalService } from './customer-removal.service';

describe('CustomerRemovalService', () => {
  let service: CustomerRemovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRemovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
