import { TestBed } from '@angular/core/testing';

import { FausseValidationEmailService } from './fausse-validation-email.service';

describe('FausseValidationEmailService', () => {
  let service: FausseValidationEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FausseValidationEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
