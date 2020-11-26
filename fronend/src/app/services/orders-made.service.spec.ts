import { TestBed } from '@angular/core/testing';

import { OrdersMadeService } from './orders-made.service';

describe('OrdersMadeService', () => {
  let service: OrdersMadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersMadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
