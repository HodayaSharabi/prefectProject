import { TestBed } from '@angular/core/testing';

import { CourierLoginService } from './courier-login.service';

describe('CourierLoginService', () => {
  let service: CourierLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourierLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
