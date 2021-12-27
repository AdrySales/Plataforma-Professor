import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAtividadesComponent } from './tela-atividades.component';

describe('TelaAtividadesComponent', () => {
  let component: TelaAtividadesComponent;
  let fixture: ComponentFixture<TelaAtividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaAtividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
