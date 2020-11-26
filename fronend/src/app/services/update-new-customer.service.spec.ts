import { TestBed } from '@angular/core/testing';

import { UpdateNewCustomerService } from './update-new-customer.service';

describe('UpdateNewCustomerService', () => {
  let service: UpdateNewCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateNewCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
