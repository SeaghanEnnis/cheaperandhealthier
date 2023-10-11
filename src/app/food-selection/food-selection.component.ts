import { Component } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../models/food';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  styleUrls: ['./food-selection.component.css']
})
export class FoodSelectionComponent {

  food : Food;
  id : number;
  constructor(private route: ActivatedRoute, private foodService: FoodService){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.food = foodService.getAFood(this.id);
  }

}
