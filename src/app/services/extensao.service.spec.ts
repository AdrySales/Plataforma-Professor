import { TestBed } from '@angular/core/testing';

import { ExtensaoService } from './extensao.service';

describe('ExtensaoService', () => {
  let service: ExtensaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtensaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
