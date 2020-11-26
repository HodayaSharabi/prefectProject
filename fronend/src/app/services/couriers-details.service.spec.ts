import { TestBed } from '@angular/core/testing';

import { CouriersDetailsService } from './couriers-details.service';

describe('CouriersDetailsService', () => {
  let service: CouriersDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouriersDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
