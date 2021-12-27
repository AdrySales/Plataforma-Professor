import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPitAprovadoComponent } from './listagem-pit-aprovado.component';

describe('ListagemPitAprovadoComponent', () => {
  let component: ListagemPitAprovadoComponent;
  let fixture: ComponentFixture<ListagemPitAprovadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemPitAprovadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPitAprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
