import { TestBed } from '@angular/core/testing';

import { EstadoDoRadService } from './estado-do-rad.service';

describe('EstadoDoRadService', () => {
  let service: EstadoDoRadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoDoRadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
