import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MealOfTheDayComponent } from './home/meal-of-the-day/meal-of-the-day.component';
import { HomeMessageComponent } from './home/home-message/home-message.component';
import { MealsComponent } from './meals/meals.component';
import { FoodsComponent } from './foods/foods.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FoodSelectionComponent } from './food-selection/food-selection.component';
import { MealSelectionComponent } from './meal-selection/meal-selection.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MealSelectionImageComponent } from './meal-selection/meal-selection-image/meal-selection-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MealOfTheDayComponent,
    HomeMessageComponent,
    FoodsComponent,
    MealsComponent,
    FoodSelectionComponent,
    MealSelectionComponent,
    MealSelectionImageComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,MatSortModule,MatPaginatorModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'meals', component: MealsComponent},
      {path: 'meal-selection/:id', pathMatch:'prefix', component: MealSelectionComponent},
      {path: 'food-selection/:id', pathMatch:'prefix', component: FoodSelectionComponent},
      {path: 'foods', component: FoodsComponent, 
        /*children:[{
          //path: 'food-selection', component: FoodSelectionComponent
        }]*/
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
