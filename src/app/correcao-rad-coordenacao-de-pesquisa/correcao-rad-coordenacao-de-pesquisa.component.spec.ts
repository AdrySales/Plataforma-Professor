import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecaoRadCoordenacaoDePesquisaComponent } from './correcao-rad-coordenacao-de-pesquisa.component';

describe('CorrecaoRadCoordenacaoDePesquisaComponent', () => {
  let component: CorrecaoRadCoordenacaoDePesquisaComponent;
  let fixture: ComponentFixture<CorrecaoRadCoordenacaoDePesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrecaoRadCoordenacaoDePesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrecaoRadCoordenacaoDePesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
