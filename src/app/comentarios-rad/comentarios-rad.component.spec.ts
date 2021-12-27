import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosRadComponent } from './comentarios-rad.component';

describe('ComentariosRadComponent', () => {
  let component: ComentariosRadComponent;
  let fixture: ComponentFixture<ComentariosRadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariosRadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
