import { FoodService } from 'src/app/food.service';
import {Meal} from '../../models/meal';

const service = new FoodService();

export const MEALS: Meal[] = [
    new Meal(1, "Hummus and A Tomato", [service.getAFood(1), service.getAFood(2)]),
    new Meal(2, "Hummus and and two Tomatos", [service.getAFood(1), service.getAFood(2), service.getAFood(2)]),
    new Meal(3, "Some random shit", [service.getAFood(70), service.getAFood(40), service.getAFood(8)])
]