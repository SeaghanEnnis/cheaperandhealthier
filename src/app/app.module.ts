import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './parent/navbar/navbar.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './parent/home/home.component';
import { MealOfTheDayComponent } from './parent/home/meal-of-the-day/meal-of-the-day.component';
import { HomeMessageComponent } from './parent/home/home-message/home-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParentComponent,
    HomeComponent,
    MealOfTheDayComponent,
    HomeMessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'meals', component: MealOfTheDayComponent},
      {path: 'home', component: ParentComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
