import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSelectionComponent } from './food-selection.component';

describe('FoodSelectionComponent', () => {
  let component: FoodSelectionComponent;
  let fixture: ComponentFixture<FoodSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodSelectionComponent]
    });
    fixture = TestBed.createComponent(FoodSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
