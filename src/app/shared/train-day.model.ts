import { Exercise } from "../day-list/train-day/exercise";


export class TrainDay {
    private static _id : number = 0;
    public id: number;
    public constructor(public weekDay: string, public groupings: string[], public exercises: Exercise[]){
        this.id = ++TrainDay._id;
    };
}