import { Repetitions } from "./repetitions";
import { format } from "util";

export class Exercise {

    name: string;
    seriesQuantity: number;
    repetitions: Repetitions;
    weight: number = 0;

    constructor(name: string, seriesQuantity: number, repetitions: Repetitions, weight?: number){
        this.name = name;
        this.seriesQuantity = seriesQuantity;
        this.repetitions = {
            min: repetitions.min,
            max: repetitions.max
        };
        if (weight) this.weight = weight;
    }

    toString(): string {
        let weightText: string;
        this.weight == 0? weightText = '' : weightText = this.weight.toString();
        return format('%s\b%d\b%d a %d\b%s', 
                      this.name, this.seriesQuantity, this.repetitions.min, this.repetitions.max, weightText);
    }

}