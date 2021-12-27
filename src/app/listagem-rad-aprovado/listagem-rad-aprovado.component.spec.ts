import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemRadAprovadoComponent } from './listagem-rad-aprovado.component';

describe('ListagemRadAprovadoComponent', () => {
  let component: ListagemRadAprovadoComponent;
  let fixture: ComponentFixture<ListagemRadAprovadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemRadAprovadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemRadAprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
