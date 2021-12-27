import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecaoRadDirecaoDeEnsinoComponent } from './correcao-rad-direcao-de-ensino.component';

describe('CorrecaoRadDirecaoDeEnsinoComponent', () => {
  let component: CorrecaoRadDirecaoDeEnsinoComponent;
  let fixture: ComponentFixture<CorrecaoRadDirecaoDeEnsinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrecaoRadDirecaoDeEnsinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrecaoRadDirecaoDeEnsinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
