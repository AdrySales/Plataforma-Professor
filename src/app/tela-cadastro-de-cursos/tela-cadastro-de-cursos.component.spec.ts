import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroDeCursosComponent } from './tela-cadastro-de-cursos.component';

describe('TelaCadastroDeCursosComponent', () => {
  let component: TelaCadastroDeCursosComponent;
  let fixture: ComponentFixture<TelaCadastroDeCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCadastroDeCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCadastroDeCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
