import { TestBed } from '@angular/core/testing';

import { NewCourierService } from './new-courier.service';

describe('NewCourierService', () => {
  let service: NewCourierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewCourierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
