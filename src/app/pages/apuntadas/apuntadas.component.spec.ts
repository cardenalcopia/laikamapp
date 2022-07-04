import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntadasComponent } from './apuntadas.component';

describe('ApuntadasComponent', () => {
  let component: ApuntadasComponent;
  let fixture: ComponentFixture<ApuntadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApuntadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApuntadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
