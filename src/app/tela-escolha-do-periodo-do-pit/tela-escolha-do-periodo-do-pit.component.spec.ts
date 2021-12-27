import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEscolhaDoPeriodoDoPitComponent } from './tela-escolha-do-periodo-do-pit.component';

describe('TelaEscolhaDoPeriodoDoPitComponent', () => {
  let component: TelaEscolhaDoPeriodoDoPitComponent;
  let fixture: ComponentFixture<TelaEscolhaDoPeriodoDoPitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaEscolhaDoPeriodoDoPitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEscolhaDoPeriodoDoPitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
