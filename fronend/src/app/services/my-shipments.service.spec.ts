import { TestBed } from '@angular/core/testing';

import { MyShipmentsService } from './my-shipments.service';

describe('MyShipmentsService', () => {
  let service: MyShipmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyShipmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
