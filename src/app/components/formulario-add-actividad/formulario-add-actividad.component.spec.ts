import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAddActividadComponent } from './formulario-add-actividad.component';

describe('FormularioAddActividadComponent', () => {
  let component: FormularioAddActividadComponent;
  let fixture: ComponentFixture<FormularioAddActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAddActividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAddActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
