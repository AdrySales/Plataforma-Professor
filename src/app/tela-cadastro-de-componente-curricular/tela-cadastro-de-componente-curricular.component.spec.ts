import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroDeComponenteCurricularComponent } from './tela-cadastro-de-componente-curricular.component';

describe('TelaCadastroDeComponenteCurricularComponent', () => {
  let component: TelaCadastroDeComponenteCurricularComponent;
  let fixture: ComponentFixture<TelaCadastroDeComponenteCurricularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCadastroDeComponenteCurricularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCadastroDeComponenteCurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
