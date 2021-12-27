import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSobreNosComponent } from './tela-sobre-nos.component';

describe('TelaSobreNosComponent', () => {
  let component: TelaSobreNosComponent;
  let fixture: ComponentFixture<TelaSobreNosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaSobreNosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSobreNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
