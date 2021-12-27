import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDeAtividadesComponent } from './listagem-de-atividades.component';

describe('ListagemDeAtividadesComponent', () => {
  let component: ListagemDeAtividadesComponent;
  let fixture: ComponentFixture<ListagemDeAtividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemDeAtividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemDeAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
