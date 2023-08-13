import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MealOfTheDayComponent } from './home/meal-of-the-day/meal-of-the-day.component';
import { HomeMessageComponent } from './home/home-message/home-message.component';
import { MealsComponent } from './meals/meals.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodSelectionComponent } from './food-selection/food-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MealOfTheDayComponent,
    HomeMessageComponent,
    FoodsComponent,
    FoodSelectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'meals', component: MealsComponent},
      {path: 'foods', component: FoodsComponent, 
        children:[{
          path: 'food-selection', component: FoodSelectionComponent
        }]
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
