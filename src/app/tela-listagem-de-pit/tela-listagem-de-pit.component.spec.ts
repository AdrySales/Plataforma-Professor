import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaListagemDePitComponent } from './tela-listagem-de-pit.component';

describe('TelaListagemDePitComponent', () => {
  let component: TelaListagemDePitComponent;
  let fixture: ComponentFixture<TelaListagemDePitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaListagemDePitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaListagemDePitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
