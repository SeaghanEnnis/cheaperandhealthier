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

    calories(){
        let sum = 0;
        this.foods.forEach(element => {
            if(element.calories)
                sum += element.calories;
        });
        return sum;
    }
}