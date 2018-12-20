import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { IconDefinition, faTrash, faEdit, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-train-day-table',
  templateUrl: './train-day-table.component.html',
  styleUrls: ['./train-day-table.component.css']
})
export class TrainDayTableComponent implements OnInit, OnChanges {

  @Input() exercises: Exercise[];
  @Output() exerciseEdited: EventEmitter<Exercise> = new EventEmitter<Exercise>();
  @Output() exerciseDeleted: EventEmitter<Exercise> = new EventEmitter<Exercise>();

  readonly faTrash: IconDefinition = faTrash;
  readonly faEdit: IconDefinition = faEdit;
  readonly faCheckSquare: IconDefinition = faCheckSquare;
  exerciseEditIndex: number = -1;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.exercises.previousValue != changes.exercises.currentValue){
      this.exerciseEditIndex = -1;
    }
  }

  onDeleteClick(exercise: Exercise){
    this.exerciseDeleted.emit(exercise);
  }

  onEditClick(index: number){
    this.exerciseEditIndex = index;
  }

  onConfirmClick(){
    this.exerciseEditIndex = -1;
  }

}
