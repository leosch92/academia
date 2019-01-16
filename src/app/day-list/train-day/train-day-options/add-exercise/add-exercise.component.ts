import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Exercise } from '../../exercise';
import { TrainDaysService } from '../../../train-days.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  @Input() trainDayId: string;

  @ViewChild('exerciseInput') exerciseInput : ElementRef;
  @ViewChild('seriesNumberInput') seriesNumberInput : ElementRef;
  @ViewChild('repsNumberMin') repsNumberMinInput : ElementRef;
  @ViewChild('repsNumberMax') repsNumberMaxInput : ElementRef;
  @ViewChild('weightInput') weightInput : ElementRef;

  constructor(private trainDaysService: TrainDaysService) { }

  ngOnInit() {
  }

  onAddItem(): void{
    let exercise: Exercise = {
      id: Guid.raw(),
      name: this.exerciseInput.nativeElement.value,
      seriesQuantity: this.seriesNumberInput.nativeElement.value,
      repetitions: {
        min: this.repsNumberMinInput.nativeElement.value,
        max: this.repsNumberMaxInput.nativeElement.value
      },
      weight: this.weightInput.nativeElement.value
    }

    this.trainDaysService.addExercise(this.trainDayId, exercise);
  }

}
