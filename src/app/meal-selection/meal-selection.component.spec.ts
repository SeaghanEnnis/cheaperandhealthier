import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealSelectionComponent } from './meal-selection.component';

describe('MealSelectionComponent', () => {
  let component: MealSelectionComponent;
  let fixture: ComponentFixture<MealSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealSelectionComponent]
    });
    fixture = TestBed.createComponent(MealSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
