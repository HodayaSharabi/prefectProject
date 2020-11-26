import { TestBed } from '@angular/core/testing';

import { CourierViewService } from './courier-view.service';

describe('CourierViewService', () => {
  let service: CourierViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourierViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
