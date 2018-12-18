import { TrainDay } from "../shared/train-day.model";
import { Exercise } from "../day-list/train-day/exercise";

export class TrainDayService{

    readonly trainDayKeyJSON: string = 'trainDays';

    trainDays: TrainDay[] = [];

    constructor(){
      this.trainDays = JSON.parse(localStorage.getItem(this.trainDayKeyJSON));
    }

    addExercise(trainDayId: number, exercise: Exercise): void {
        this.trainDays.find( td => td.id === trainDayId).exercises.push(exercise);
    }

    save(){
      localStorage.setItem(this.trainDayKeyJSON, JSON.stringify(this.trainDays));
    }
}