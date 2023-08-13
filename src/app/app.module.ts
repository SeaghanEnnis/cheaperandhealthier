import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './parent/navbar/navbar.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './parent/home/home.component';
import { MealOfTheDayComponent } from './parent/home/meal-of-the-day/meal-of-the-day.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParentComponent,
    HomeComponent,
    MealOfTheDayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
