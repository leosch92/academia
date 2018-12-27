import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { IconDefinition, faTrash, faEdit, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Exercise } from '../exercise';
import { TrainDaysService } from '../../train-days.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-train-day-table',
  templateUrl: './train-day-table.component.html',
  styleUrls: ['./train-day-table.component.css']
})
export class TrainDayTableComponent implements OnInit, OnChanges {

  @Input() trainDayId: Guid;
  @Input() exercises: Exercise[];

  readonly faTrash: IconDefinition = faTrash;
  readonly faEdit: IconDefinition = faEdit;
  readonly faCheckSquare: IconDefinition = faCheckSquare;
  exerciseEditIndex: number = -1;

  constructor(private trainDaysService: TrainDaysService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.exercises.previousValue != changes.exercises.currentValue){
      this.exerciseEditIndex = -1;
    }
  }

  onDeleteClick(exercise: Exercise){
    this.trainDaysService.deleteExercise(this.trainDayId, exercise);
  }

  onEditClick(index: number){
    this.exerciseEditIndex = index;
  }

  onConfirmClick(exercise: Exercise){
    this.exerciseEditIndex = -1;
    this.trainDaysService.editExercise(this.trainDayId, exercise);
  }

}
