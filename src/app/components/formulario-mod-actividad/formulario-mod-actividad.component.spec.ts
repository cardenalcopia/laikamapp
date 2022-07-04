import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioModActividadComponent } from './formulario-mod-actividad.component';

describe('FormularioModActividadComponent', () => {
  let component: FormularioModActividadComponent;
  let fixture: ComponentFixture<FormularioModActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioModActividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioModActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
