import { TestBed } from '@angular/core/testing';

import { UpdateDetailsCourierService } from './update-details-courier.service';

describe('UpdateDetailsCourierService', () => {
  let service: UpdateDetailsCourierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateDetailsCourierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
