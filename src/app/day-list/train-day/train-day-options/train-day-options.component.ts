import { Component, OnInit, Input } from '@angular/core';
import { faPlusSquare, IconDefinition, faSave } from '@fortawesome/free-solid-svg-icons';
import { TrainDaysService } from '../../train-days.service';
import { Guid } from 'guid-typescript';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-train-day-options',
  templateUrl: './train-day-options.component.html',
  styleUrls: ['./train-day-options.component.css']
})
export class TrainDayOptionsComponent implements OnInit {

  @Input() trainDayId: Guid;

  faPlusSquare : IconDefinition = faPlusSquare;
  faSave: IconDefinition = faSave;
  adding : boolean = false;

  constructor(private trainDaysService: TrainDaysService) { }

  ngOnInit() {
    this.trainDaysService.exerciseAdded.subscribe(
      (exercise: Exercise) => { this.adding = false }
    )
  }

  onAddClick() {
    this.adding = !this.adding;
  }

  onSaveClick(): void {
    this.trainDaysService.save();
  }
}
