import { TestBed } from '@angular/core/testing';

import { ContactUsServiceService } from './contact-us.service';

describe('ContactUsServiceService', () => {
  let service: ContactUsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactUsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
