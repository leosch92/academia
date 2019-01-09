import { TrainDay } from "../shared/train-day.model";
import { Exercise } from "./train-day/exercise";
import { EventEmitter } from "@angular/core";
import { Guid } from "guid-typescript";

const trainDaysReviver = (key: string, value: any) => {
  if (key === 'id'){
    return Guid.parse(value);
  }
  return value;
}

export class TrainDaysService{

    readonly trainDaysKeyJSON: string = 'trainDays';
    private trainDays: TrainDay[] = [];
    exerciseAdded: EventEmitter<Exercise[]> = new EventEmitter<Exercise[]>();
    exerciseDeleted: EventEmitter<Exercise[]> = new EventEmitter<Exercise[]>();
    exerciseEdited: EventEmitter<Exercise[]> = new EventEmitter<Exercise[]>();

    constructor(){
      this.trainDays = JSON.parse(localStorage.getItem(this.trainDaysKeyJSON), trainDaysReviver);
      if (this.trainDays == null){
        this.trainDays = this.getEmptyTrainDays();
      }
    }

    getTrainDays(): TrainDay[] {
      return this.trainDays.slice();
    }

    private getEmptyTrainDays(): TrainDay[] {
      return [
        new TrainDay('Segunda', [], []),
        new TrainDay('Terça', [], []),
        new TrainDay('Quarta', [], []),
        new TrainDay('Quinta', [], []),
        new TrainDay('Sexta', [], []),
        new TrainDay('Sábado', [], []),
        new TrainDay('Domingo', [], [])
      ];
    }

    addExercise(trainDayId: Guid, exercise: Exercise): void {
        let exercises = this.trainDays.find( td => td.id.equals(trainDayId)).exercises;
        exercises.push(exercise);
        this.exerciseAdded.emit(exercises);
    }

    deleteExercise(trainDayId: Guid, exercise: Exercise): void {
      this.updateExercise(trainDayId, exercise, 'delete');
    }

    editExercise(trainDayId: Guid, editedExercise: Exercise): void {
      this.updateExercise(trainDayId, editedExercise, 'edit');
    }

    updateExercise(trainDayId: Guid, updatedExercise: Exercise, operation: string){
      let exercises = this.trainDays.find(td => td.id.equals(trainDayId)).exercises;
      let exercise = exercises.find(ex => ex.id.equals(updatedExercise.id));
      const index: number = exercises.indexOf(exercise);
      if (index !== -1){
        if (operation === 'edit'){
          exercises[index] = updatedExercise;
          this.exerciseEdited.emit(exercises);
        } else if (operation === 'delete'){
          exercises.splice(index, 1);
          this.exerciseDeleted.emit(exercises);
        }
      }
    }

    changeGroupings(trainDayId: Guid, newGroupings: string[]){
      this.trainDays.find(td => td.id.equals(trainDayId)).groupings = newGroupings; 
    }

    save(){
      localStorage.setItem(this.trainDaysKeyJSON, JSON.stringify(this.trainDays));
    }

}