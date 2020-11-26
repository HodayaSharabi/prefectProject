import { TestBed } from '@angular/core/testing';

import { CourierCommentsService } from './courier-comments.service';

describe('CourierCommentsService', () => {
  let service: CourierCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourierCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
