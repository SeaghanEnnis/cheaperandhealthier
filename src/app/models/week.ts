import {Day} from './day';
import { Food } from './food';

export class Week{
    id: number;
    name: string;
    days: Array<Day>;

    constructor(id: number, name: string,  days: Array<Day>){
        this.id = id;
        this.name = name;
        this.days = days;
    }
}