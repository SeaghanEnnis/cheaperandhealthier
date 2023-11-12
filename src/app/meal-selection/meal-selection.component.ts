import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../models/meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-selection',
  templateUrl: './meal-selection.component.html',
  styleUrls: ['./meal-selection.component.css']
})
export class MealSelectionComponent {

  
  id:number;
  meal:Meal;
  constructor(private route: ActivatedRoute, private mealService: MealService){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.meal =mealService.getAMeals(this.id);
  }

}
