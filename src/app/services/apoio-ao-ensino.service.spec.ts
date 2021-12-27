import { TestBed } from '@angular/core/testing';

import { ApoioAoEnsinoService } from './apoio-ao-ensino.service';

describe('ApoioAoEnsinoService', () => {
  let service: ApoioAoEnsinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApoioAoEnsinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
