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

    protien(){
        let sum = 0;
        this.foods.forEach(element => {
            if(element.protein)
                sum += element.protein;
        });
        return sum;
    }

    carbohydrates(){
        let sum = 0;
        this.foods.forEach(element => {
            if(element.carbohydrates)
                sum += element.carbohydrates;
        });
        return sum;
    }

    fats(){
        let sum = 0;
        this.foods.forEach(element => {
            if(element.fats)
                sum += element.fats;
        });
        return sum;
    }
}