import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Exercise } from '../../exercise';
import { TrainDaysService } from '../../../train-days.service';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  @Input() trainDayId: number;

  @ViewChild('exerciseInput') exerciseInput : ElementRef;
  @ViewChild('seriesNumberInput') seriesNumberInput : ElementRef;
  @ViewChild('repsNumberMin') repsNumberMinInput : ElementRef;
  @ViewChild('repsNumberMax') repsNumberMaxInput : ElementRef;
  @ViewChild('weightInput') weightInput : ElementRef;

  @Output() exerciseAdded : EventEmitter<Exercise> = new EventEmitter<Exercise>();

  constructor(private trainDaysService: TrainDaysService) { }

  ngOnInit() {
  }

  onAddItem(): void{
    let exercise = new Exercise(
      this.exerciseInput.nativeElement.value,
      this.seriesNumberInput.nativeElement.value,
      {
        min: this.repsNumberMinInput.nativeElement.value,
        max: this.repsNumberMaxInput.nativeElement.value
      },
      this.weightInput.nativeElement.value
    );

    this.trainDaysService.addExercise(this.trainDayId, exercise);
    this.exerciseAdded.emit(exercise);
  }

}
