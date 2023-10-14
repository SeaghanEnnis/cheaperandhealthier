import { Injectable } from '@angular/core';
import { Meal } from './models/meal';
import { MEALS } from './data/meals/aMeal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor() { }

  getAllMeals(): Meal[]{
    return MEALS;
  }

  getAMeals(id:number): Meal{
    return MEALS[id - 1];
  }
}
