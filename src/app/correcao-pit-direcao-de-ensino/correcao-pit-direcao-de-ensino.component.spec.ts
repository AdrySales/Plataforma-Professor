import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecaoPitDirecaoDeEnsinoComponent } from './correcao-pit-direcao-de-ensino.component';

describe('CorrecaoPitDirecaoDeEnsinoComponent', () => {
  let component: CorrecaoPitDirecaoDeEnsinoComponent;
  let fixture: ComponentFixture<CorrecaoPitDirecaoDeEnsinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrecaoPitDirecaoDeEnsinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrecaoPitDirecaoDeEnsinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
