import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecaoRadCoordenacaoDeExtensaoComponent } from './correcao-rad-coordenacao-de-extensao.component';

describe('CorrecaoRadCoordenacaoDeExtensaoComponent', () => {
  let component: CorrecaoRadCoordenacaoDeExtensaoComponent;
  let fixture: ComponentFixture<CorrecaoRadCoordenacaoDeExtensaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrecaoRadCoordenacaoDeExtensaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrecaoRadCoordenacaoDeExtensaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
