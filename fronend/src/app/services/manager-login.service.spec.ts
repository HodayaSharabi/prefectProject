import { TestBed } from '@angular/core/testing';

import { ManagerLoginService } from './manager-login.service';

describe('ManagerLoginService', () => {
  let service: ManagerLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
