import {Meal} from './meal';

export class Day {
    id: number;
    name: string;
    dayOfWeek: number;
    foods: Array<Meal>;

    constructor(id: number, name: string, dayOfWeek: number, foods: Array<Meal>){
        this.id = id;
        this.name = name;
        this.dayOfWeek = dayOfWeek;
        this.foods = foods;
    }
}

enum DayOfWeek{
    Sunday = 1,
    Monday = 2,
    Tuesday = 3,
    Wednesday = 4,
    Thursday = 5,
    Friday = 6,
    Saturday = 7,
}