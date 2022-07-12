import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreadasActividadComponent } from './card-creadas-actividad.component';

describe('CardCreadasActividadComponent', () => {
  let component: CardCreadasActividadComponent;
  let fixture: ComponentFixture<CardCreadasActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCreadasActividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCreadasActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
