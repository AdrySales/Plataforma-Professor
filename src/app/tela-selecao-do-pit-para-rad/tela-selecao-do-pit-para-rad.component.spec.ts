import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSelecaoDoPitParaRadComponent } from './tela-selecao-do-pit-para-rad.component';

describe('TelaSelecaoDoPitParaRadComponent', () => {
  let component: TelaSelecaoDoPitParaRadComponent;
  let fixture: ComponentFixture<TelaSelecaoDoPitParaRadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaSelecaoDoPitParaRadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSelecaoDoPitParaRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
