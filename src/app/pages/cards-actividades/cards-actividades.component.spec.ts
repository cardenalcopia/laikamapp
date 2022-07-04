import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsActividadesComponent } from './cards-actividades.component';

describe('CardsActividadesComponent', () => {
  let component: CardsActividadesComponent;
  let fixture: ComponentFixture<CardsActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsActividadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
