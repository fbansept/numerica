import { TestBed } from '@angular/core/testing';

import { TestTransfertService } from './test-transfert.service';

describe('TestTransfertService', () => {
  let service: TestTransfertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestTransfertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
