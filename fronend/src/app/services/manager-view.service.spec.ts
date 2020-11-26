import { TestBed } from '@angular/core/testing';

import { ManagerViewService } from './manager-view.service';

describe('ManagerViewService', () => {
  let service: ManagerViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
