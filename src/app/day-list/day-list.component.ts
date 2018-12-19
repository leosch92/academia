import { Component, OnInit } from '@angular/core';
import { TrainDay } from '../shared/train-day.model';
import { TrainDayService } from '../services/train-day.service';

@Component({
  selector: 'app-day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.css'],
  providers: [ TrainDayService ]
})
export class DayListComponent implements OnInit{
  
  trainDays : TrainDay[] = [];
  shownTrainDay : TrainDay = null;
  
  constructor(private trainDayService: TrainDayService) { }

  ngOnInit() {
    this.trainDays = this.trainDayService.trainDays;
  }

  onDayClick(trainDay: TrainDay) {
    this.shownTrainDay = trainDay;
  }

  isTrainDayFilled(trainDay: TrainDay): boolean{
    return trainDay && trainDay.groupings.length != 0;
  }
}
