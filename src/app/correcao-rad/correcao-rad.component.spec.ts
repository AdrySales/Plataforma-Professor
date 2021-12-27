import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecaoRadComponent } from './correcao-rad.component';

describe('CorrecaoRadComponent', () => {
  let component: CorrecaoRadComponent;
  let fixture: ComponentFixture<CorrecaoRadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrecaoRadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrecaoRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
