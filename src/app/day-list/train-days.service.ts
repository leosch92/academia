import { TrainDay } from "../shared/train-day.model";
import { Exercise } from "./train-day/exercise";
import { cloneDeep } from 'lodash';
import { EventEmitter } from "@angular/core";

export class TrainDaysService{

    readonly trainDaysKeyJSON: string = 'trainDays';
    private trainDays: TrainDay[] = [];
    exerciseAdded: EventEmitter<Exercise> = new EventEmitter<Exercise>();
    exerciseDeleted: EventEmitter<Exercise[]> = new EventEmitter<Exercise[]>();
    exerciseEdited: EventEmitter<Exercise[]> = new EventEmitter<Exercise[]>();

    constructor(){
      this.trainDays = JSON.parse(localStorage.getItem(this.trainDaysKeyJSON));
      if (this.trainDays == null){
        this.trainDays = this.getEmptyTrainDays();
      }
    }

    getTrainDays(): TrainDay[] {
      return cloneDeep(this.trainDays);
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

    addExercise(trainDayId: number, exercise: Exercise): void {
        this.trainDays.find( td => td.id === trainDayId).exercises.push(exercise);
        this.exerciseAdded.emit(exercise);
    }

    deleteExercise(trainDayId: number, exercise: Exercise): void {
      this.updateExercise(trainDayId, exercise, 'delete');
    }

    editExercise(trainDayId: number, editedExercise: Exercise): void {
      this.updateExercise(trainDayId, editedExercise, 'edit');
    }

    updateExercise(trainDayId: number, updatedExercise: Exercise, operation: string){
      let exercises = this.trainDays.find(td => td.id === trainDayId).exercises;
      let exercise = exercises.find(ex => ex.id === updatedExercise.id);
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

    changeGroupings(trainDayId: number, newGroupings: string[]){
      this.trainDays.find(td => td.id === trainDayId).groupings = newGroupings; 
    }

    save(){
      localStorage.setItem(this.trainDaysKeyJSON, JSON.stringify(this.trainDays));
    }

}