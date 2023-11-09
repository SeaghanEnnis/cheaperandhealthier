import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-meal-selection-image',
  templateUrl: './meal-selection-image.component.html',
  styleUrls: ['./meal-selection-image.component.css']
})
export class MealSelectionImageComponent {
  
  id:Number;
  constructor(private route: ActivatedRoute){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

}
