import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecaoPitCoordenacaoDeExtensaoComponent } from './correcao-pit-coordenacao-de-extensao.component';

describe('CorrecaoPitCoordenacaoDeExtensaoComponent', () => {
  let component: CorrecaoPitCoordenacaoDeExtensaoComponent;
  let fixture: ComponentFixture<CorrecaoPitCoordenacaoDeExtensaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrecaoPitCoordenacaoDeExtensaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrecaoPitCoordenacaoDeExtensaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
