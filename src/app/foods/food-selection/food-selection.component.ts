import { Component } from '@angular/core';

import {MEATS} from '../../data/meats';

@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  styleUrls: ['./food-selection.component.css']
})
export class FoodSelectionComponent {
  meats = MEATS;
}
