import { Component, Input, SimpleChanges } from '@angular/core';
import { TrainDay } from 'src/app/shared/train-day.model';
import { faTrash, IconDefinition, faEdit, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { TrainDayService } from 'src/app/services/train-day.service';
import { Exercise } from './exercise';


@Component({
  selector: 'app-train-day',
  templateUrl: './train-day.component.html',
  styleUrls: ['./train-day.component.css']
})
export class TrainDayComponent{

  readonly faTrash: IconDefinition = faTrash;
  readonly faEdit: IconDefinition = faEdit;
  readonly faCheckSquare: IconDefinition = faCheckSquare;
  exerciseEditIndex: number = -1;

  @Input() trainDay: TrainDay;

  constructor(private trainDayService: TrainDayService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.trainDay.previousValue != changes.trainDay.currentValue){
      this.exerciseEditIndex = -1;
    }
  }

  onDeleteClick(exercise: Exercise){
    this.trainDayService.deleteExercise(this.trainDay.id, exercise);
  }

  onEditClick(index: number){
    this.exerciseEditIndex = index;
  }

  onConfirmClick(){
    this.exerciseEditIndex = -1;
  }

  getOptionsTextAlignStyle(index: number): string {
    if (index === this.exerciseEditIndex){
      return 'center';
    } else {
      return 'default';
    }
  }
}
