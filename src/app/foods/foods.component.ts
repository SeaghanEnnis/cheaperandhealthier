import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MEATS} from '../data/foods/meats';
import {VEGETABLES} from '../data/foods/vegetables';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Food } from 'src/app/models/food';
import { GRAINS } from 'src/app/data/foods/grains';
import { FRUITS } from 'src/app/data/foods/fruits';
import { SPICIES } from 'src/app/data/foods/spicies';
import { DRINKS } from 'src/app/data/foods/drinks';
import { ALL } from 'src/app/data/foods/all';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {

  allFoodArray:  Food[] = [];

  allFoods = new MatTableDataSource<Food>();
  columnsToDisplay: string[] = ["id","name", "type", "price", "calories", "protein", "carbohydrates", "fats"];
    
  constructor(private foodService: FoodService){
    this.allFoodArray.push(...foodService.getAllFoods());

    this.allFoods = new MatTableDataSource<Food>(this.allFoodArray);
  }

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  @ViewChild(MatSort) sort: any =  MatSort;

  ngAfterViewInit() {
    //this.allFoods.sort = this.sort;
    this.allFoods.paginator = this.paginator;
    this.allFoods.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.allFoods.filter = filterValue.trim().toLowerCase();
  }

}
