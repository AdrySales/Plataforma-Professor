import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecaoPitComponent } from './correcao-pit.component';

describe('CorrecaoPitComponent', () => {
  let component: CorrecaoPitComponent;
  let fixture: ComponentFixture<CorrecaoPitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrecaoPitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrecaoPitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
