import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TrainDay } from 'src/app/shared/train-day.model';
import { Exercise } from './exercise';


@Component({
  selector: 'app-train-day',
  templateUrl: './train-day.component.html',
  styleUrls: ['./train-day.component.css']
})
export class TrainDayComponent {

  @Input() trainDay: TrainDay;

  constructor() { }

  onExerciseAdded(exercise: Exercise){
    this.trainDay.exercises.push(exercise);
  }

}
