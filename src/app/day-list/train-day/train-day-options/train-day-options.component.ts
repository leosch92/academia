import { Component, OnInit, Input } from '@angular/core';
import { faPlusSquare, IconDefinition, faSave } from '@fortawesome/free-solid-svg-icons';
import { TrainDaysService } from '../../train-days.service';

@Component({
  selector: 'app-train-day-options',
  templateUrl: './train-day-options.component.html',
  styleUrls: ['./train-day-options.component.css']
})
export class TrainDayOptionsComponent implements OnInit {

  @Input() trainDayId: number;

  faPlusSquare : IconDefinition = faPlusSquare;
  faSave: IconDefinition = faSave;
  adding : boolean = false;

  constructor(private trainDaysService: TrainDaysService) { }

  ngOnInit() {
  }

  onAddClick() {
    this.adding = !this.adding;
  }

  onSaveClick(): void {
    this.trainDaysService.save();
  }
}
