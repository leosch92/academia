import { TrainDay } from "../shared/train-day.model";
import { Exercise } from "./train-day/exercise";
import { EventEmitter } from "@angular/core";
import { Guid } from "guid-typescript";

export class TrainDaysService{

    readonly trainDaysKeyJSON: string = 'trainDays';
    private trainDays: TrainDay[] = [];
    exerciseAdded: EventEmitter<Exercise[]> = new EventEmitter<Exercise[]>();
    exerciseDeleted: EventEmitter<Exercise[]> = new EventEmitter<Exercise[]>();
    exerciseEdited: EventEmitter<Exercise[]> = new EventEmitter<Exercise[]>();

    constructor(){
      this.trainDays = JSON.parse(localStorage.getItem(this.trainDaysKeyJSON));
      if (this.trainDays == null){
        this.trainDays = this.getEmptyTrainDays();
      }
    }

    getTrainDays(): TrainDay[] {
      return this.trainDays.slice();
    }

    private getEmptyTrainDays(): TrainDay[] {
      let days: string[] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
      let trainDays: TrainDay[] = [];
      days.forEach( day => {
        trainDays.push(
          {
            id: Guid.raw(),
            weekDay: day,
            groupings: [],
            exercises: []
          }
        )
      });
      return trainDays;
    }

    addExercise(trainDayId: string, exercise: Exercise): void {
        let exercises = this.trainDays.find( td => td.id === trainDayId).exercises;
        exercises.push(exercise);
        this.exerciseAdded.emit(exercises);
    }

    deleteExercise(trainDayId: string, exercise: Exercise): void {
      this.updateExercise(trainDayId, exercise, 'delete');
    }

    editExercise(trainDayId: string, editedExercise: Exercise): void {
      this.updateExercise(trainDayId, editedExercise, 'edit');
    }

    updateExercise(trainDayId: string, updatedExercise: Exercise, operation: string){
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

    changeGroupings(trainDayId: string, newGroupings: string[]){
      this.trainDays.find(td => td.id === trainDayId).groupings = newGroupings; 
    }

    save(){
      localStorage.setItem(this.trainDaysKeyJSON, JSON.stringify(this.trainDays));
    }

}