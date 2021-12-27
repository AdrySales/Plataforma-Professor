import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosPitComponent } from './comentarios-pit.component';

describe('ComentariosPitComponent', () => {
  let component: ComentariosPitComponent;
  let fixture: ComponentFixture<ComentariosPitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariosPitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosPitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
