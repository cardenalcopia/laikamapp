import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPipicanesComponent } from './cards-pipicanes.component';

describe('CardsPipicanesComponent', () => {
  let component: CardsPipicanesComponent;
  let fixture: ComponentFixture<CardsPipicanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsPipicanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsPipicanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
