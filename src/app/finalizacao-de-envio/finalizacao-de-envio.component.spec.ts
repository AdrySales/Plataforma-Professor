import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizacaoDeEnvioComponent } from './finalizacao-de-envio.component';

describe('FinalizacaoDeEnvioComponent', () => {
  let component: FinalizacaoDeEnvioComponent;
  let fixture: ComponentFixture<FinalizacaoDeEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizacaoDeEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizacaoDeEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
