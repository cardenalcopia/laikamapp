import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardApuntadasActividadComponent } from './card-apuntadas-actividad.component';

describe('CardApuntadasActividadComponent', () => {
  let component: CardApuntadasActividadComponent;
  let fixture: ComponentFixture<CardApuntadasActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardApuntadasActividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardApuntadasActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
