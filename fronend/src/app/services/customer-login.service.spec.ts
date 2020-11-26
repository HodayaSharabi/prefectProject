import { TestBed } from '@angular/core/testing';

import { CustomerLoginService } from './customer-login.service';

describe('CustomerLoginService', () => {
  let service: CustomerLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
