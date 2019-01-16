import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Exercise } from '../../exercise';
import { TrainDaysService } from '../../../train-days.service';
import { Guid } from 'guid-typescript';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  @Input() trainDayId: string;

  constructor(private trainDaysService: TrainDaysService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm): void{
    let exercise: Exercise = {
      id: Guid.raw(),
      name: form.value.name,
      seriesQuantity: form.value.seriesNumber,
      repetitions: {
        min: form.value.minRepsNumber,
        max: form.value.maxRepsNumber
      },
      weight: form.value.weight
    }

    this.trainDaysService.addExercise(this.trainDayId, exercise);
  }

}
