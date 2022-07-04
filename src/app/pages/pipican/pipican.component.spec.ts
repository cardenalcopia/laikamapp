import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipicanComponent } from './pipican.component';

describe('PipicanComponent', () => {
  let component: PipicanComponent;
  let fixture: ComponentFixture<PipicanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipicanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipicanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
