import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-selection',
  templateUrl: './meal-selection.component.html',
  styleUrls: ['./meal-selection.component.css']
})
export class MealSelectionComponent {

  
  id:Number;
  constructor(private route: ActivatedRoute){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

}
