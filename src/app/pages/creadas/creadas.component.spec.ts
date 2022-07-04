import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadasComponent } from './creadas.component';

describe('CreadasComponent', () => {
  let component: CreadasComponent;
  let fixture: ComponentFixture<CreadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
