import { Exercise } from "../day-list/train-day/exercise";

export interface TrainDay {
    id: string;
    weekDay: string;
    groupings: string[];
    exercises: Exercise[];
}