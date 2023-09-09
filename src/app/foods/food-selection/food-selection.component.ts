import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MEATS} from '../../data/foods/meats';
import {VEGETABLES} from '../../data/foods/vegetables';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Food } from 'src/app/models/food';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  styleUrls: ['./food-selection.component.css'],
})
export class FoodSelectionComponent implements AfterViewInit {
  meats = MEATS;
  vegetables = VEGETABLES;
  allFoods = new MatTableDataSource<Food>(MEATS.concat(VEGETABLES));
  columnsToDisplay: string[] = ["id","name", "type", "price", "calories"];


  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  @ViewChild(MatSort) sort: any =  MatSort;

  ngAfterViewInit() {
    this.allFoods.sort = this.sort;
    this.allFoods.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.allFoods.filter = filterValue.trim().toLowerCase();
  }

}
