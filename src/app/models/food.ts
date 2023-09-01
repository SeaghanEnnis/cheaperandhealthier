import {Macro} from './macro';
import {Micro} from './micro';

export type Food = {
    id: number;
    name: string;

    type: string | null;
    price: number | null;
    
    calories: number | null;
    macro?: Macro;
    micro?: Micro;

}