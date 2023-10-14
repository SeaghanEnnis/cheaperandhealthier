import { Component } from '@angular/core';
import { MEALS } from '../data/meals/aMeal';
import { Meal } from '../models/meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent {
  isActive = true;

  meals :Meal[] = MEALS;


}
