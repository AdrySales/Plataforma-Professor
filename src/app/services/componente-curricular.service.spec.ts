import { TestBed } from '@angular/core/testing';

import { ComponenteCurricularService } from './componente-curricular.service';

describe('ComponenteCurricularService', () => {
  let service: ComponenteCurricularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponenteCurricularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
