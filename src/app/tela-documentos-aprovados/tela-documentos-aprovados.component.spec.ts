import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDocumentosAprovadosComponent } from './tela-documentos-aprovados.component';

describe('TelaDocumentosAprovadosComponent', () => {
  let component: TelaDocumentosAprovadosComponent;
  let fixture: ComponentFixture<TelaDocumentosAprovadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaDocumentosAprovadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDocumentosAprovadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
