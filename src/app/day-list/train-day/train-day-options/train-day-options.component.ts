import { Component, OnInit, Input } from '@angular/core';
import { faPlusSquare, IconDefinition, faSave } from '@fortawesome/free-solid-svg-icons';
import { TrainDayService } from 'src/app/services/train-day.service';

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

  constructor(private trainDayService: TrainDayService) { }

  ngOnInit() {
  }

  onAddClick() {
    this.adding = !this.adding;
  }

  onSaveClick(): void {
    this.trainDayService.save();
  }
}
