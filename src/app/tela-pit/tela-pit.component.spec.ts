import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPitComponent } from './tela-pit.component';

describe('TelaPitComponent', () => {
  let component: TelaPitComponent;
  let fixture: ComponentFixture<TelaPitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaPitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
