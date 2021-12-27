import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaDoPitComponent } from './escolha-do-pit.component';

describe('EscolhaDoPitComponent', () => {
  let component: EscolhaDoPitComponent;
  let fixture: ComponentFixture<EscolhaDoPitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaDoPitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaDoPitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
