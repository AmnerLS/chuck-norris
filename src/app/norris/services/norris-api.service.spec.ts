import { TestBed } from '@angular/core/testing';

import { NorrisApiService } from './norris-api.service';

describe('NorrisApiService', () => {
  let service: NorrisApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NorrisApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
