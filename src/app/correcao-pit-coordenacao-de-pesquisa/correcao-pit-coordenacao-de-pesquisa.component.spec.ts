import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecaoPitCoordenacaoDePesquisaComponent } from './correcao-pit-coordenacao-de-pesquisa.component';

describe('CorrecaoPitCoordenacaoDePesquisaComponent', () => {
  let component: CorrecaoPitCoordenacaoDePesquisaComponent;
  let fixture: ComponentFixture<CorrecaoPitCoordenacaoDePesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrecaoPitCoordenacaoDePesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrecaoPitCoordenacaoDePesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
