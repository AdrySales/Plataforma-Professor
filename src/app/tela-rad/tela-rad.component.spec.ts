import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRadComponent } from './tela-rad.component';

describe('TelaRadComponent', () => {
  let component: TelaRadComponent;
  let fixture: ComponentFixture<TelaRadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaRadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
