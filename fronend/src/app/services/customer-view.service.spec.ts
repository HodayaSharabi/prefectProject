import { TestBed } from '@angular/core/testing';

import { CustomerViewService } from './customer-view.service';

describe('CustomerViewService', () => {
  let service: CustomerViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
