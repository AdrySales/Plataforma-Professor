import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaListagemDeRadComponent } from './tela-listagem-de-rad.component';

describe('TelaListagemDeRadComponent', () => {
  let component: TelaListagemDeRadComponent;
  let fixture: ComponentFixture<TelaListagemDeRadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaListagemDeRadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaListagemDeRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
