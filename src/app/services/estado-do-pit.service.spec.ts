import { TestBed } from '@angular/core/testing';

import { EstadoDoPitService } from './estado-do-pit.service';

describe('EstadoDoPitService', () => {
  let service: EstadoDoPitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoDoPitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
