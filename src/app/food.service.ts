import { Injectable } from '@angular/core';

import { Food } from './models/food';
import { ALL } from './data/foods/all';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoods(): Food[]{
    return ALL;
  }

  getAFood(id:number): Food{
    return ALL[id - 1];
  }

}
