import { Component, OnInit } from '@angular/core';
import { TrainDay } from '../shared/train-day.model';
import { TrainDaysService } from './train-days.service';

@Component({
  selector: 'app-day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.css'],
  providers: [ TrainDaysService ]
})
export class DayListComponent implements OnInit{
  
  trainDays : TrainDay[] = [];
  shownTrainDay : TrainDay = null;
  
  constructor(private trainDaysService: TrainDaysService) { }

  ngOnInit() {
    this.trainDays = this.trainDaysService.getTrainDays();
  }

  onDayClick(trainDay: TrainDay) {
    this.shownTrainDay = (this.shownTrainDay === trainDay)? undefined : trainDay;
  }

  isTrainDayFilled(trainDay: TrainDay): boolean{
    return trainDay && trainDay.groupings.length != 0;
  }
}
