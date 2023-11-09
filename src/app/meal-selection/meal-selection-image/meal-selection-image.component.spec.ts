import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealSelectionImageComponent } from './meal-selection-image.component';

describe('MealSelectionImageComponent', () => {
  let component: MealSelectionImageComponent;
  let fixture: ComponentFixture<MealSelectionImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealSelectionImageComponent]
    });
    fixture = TestBed.createComponent(MealSelectionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
