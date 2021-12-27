import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusDocumentoComponent } from './estatus-documento.component';

describe('EstatusDocumentoComponent', () => {
  let component: EstatusDocumentoComponent;
  let fixture: ComponentFixture<EstatusDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatusDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatusDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
