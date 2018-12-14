import { Exercise } from "../day-list/train-day/exercise";


export class TrainDay {
    public constructor(public weekDay: string, public groupings: string[], public exercises: Exercise[]){};
}