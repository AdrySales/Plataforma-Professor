import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorQuadroDeAvisosComponent } from './editor-quadro-de-avisos.component';

describe('EditorQuadroDeAvisosComponent', () => {
  let component: EditorQuadroDeAvisosComponent;
  let fixture: ComponentFixture<EditorQuadroDeAvisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorQuadroDeAvisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorQuadroDeAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
