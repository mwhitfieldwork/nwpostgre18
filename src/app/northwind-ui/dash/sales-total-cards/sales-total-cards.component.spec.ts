import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTotalCardsComponent } from './sales-total-cards.component';

describe('SalesTotalCardsComponent', () => {
  let component: SalesTotalCardsComponent;
  let fixture: ComponentFixture<SalesTotalCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesTotalCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesTotalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
