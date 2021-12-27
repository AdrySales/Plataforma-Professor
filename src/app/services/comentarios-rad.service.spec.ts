import { TestBed } from '@angular/core/testing';

import { ComentariosRadService } from './comentarios-rad.service';

describe('ComentariosRadService', () => {
  let service: ComentariosRadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentariosRadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
