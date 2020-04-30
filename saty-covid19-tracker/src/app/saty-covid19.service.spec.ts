import { TestBed } from '@angular/core/testing';

import { SatyCovid19Service } from './saty-covid19.service';

describe('SatyCovid19Service', () => {
  let service: SatyCovid19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatyCovid19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
