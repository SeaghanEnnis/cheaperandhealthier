import {Food} from './food';

export class Meal {
    id: number;
    name: string;
    foods: Array<Food>;

    constructor(id: number, name: string,  foods: Array<Food>){
        this.id = id;
        this.name = name;
        this.foods = foods;
    }
}