import {Macro} from './macro';
import {Micro} from './micro';

export class Food  {
    id: number;
    name: string;

    type: string | null;
    price: number | null;
    
    calories: number | null;
    macro?: Macro;
    micro?: Micro;

    constructor(id: number, name: string,  type: string , price: number, calories: number ) {
        this.id = id;
        this.name = name;
        this.type = type; 
        this.price = price; 
        this.calories = calories; 
    }

}