import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroDeAvisosComponent } from './quadro-de-avisos.component';

describe('QuadroDeAvisosComponent', () => {
  let component: QuadroDeAvisosComponent;
  let fixture: ComponentFixture<QuadroDeAvisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadroDeAvisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroDeAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
