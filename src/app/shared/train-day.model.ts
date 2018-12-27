import { Exercise } from "../day-list/train-day/exercise";
import { Guid } from "guid-typescript";

export class TrainDay {
    public id: Guid;
    public constructor(public weekDay: string, public groupings: string[], public exercises: Exercise[]){
        this.id = Guid.create();
    };
}