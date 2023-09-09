import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import {MEATS} from '../../data/foods/meats';
import {VEGETABLES} from '../../data/foods/vegetables';

@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  styleUrls: ['./food-selection.component.css']
})
export class FoodSelectionComponent {
  meats = MEATS;
  vegetables = VEGETABLES;
  allFoods = MEATS.concat(VEGETABLES);
  columnsToDisplay: string[] = ["id","name", "type", "price", "calories"];
}
