import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarActividadComponent } from './formulario-editar-actividad.component';

describe('FormularioEditarActividadComponent', () => {
  let component: FormularioEditarActividadComponent;
  let fixture: ComponentFixture<FormularioEditarActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEditarActividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEditarActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
