import { TestBed } from '@angular/core/testing';

import { CommentsAndIlluminationsService } from './comments-and-illuminations.service';

describe('CommentsAndIlluminationsService', () => {
  let service: CommentsAndIlluminationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsAndIlluminationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
