import { Component, Input, OnInit } from '@angular/core';
import { TrainDay } from '../../shared/train-day.model';
import { TrainDaysService } from '../train-days.service';
import { Exercise } from './exercise';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Groupings } from '../../shared/constants/groupings.constant';


@Component({
  selector: 'app-train-day',
  templateUrl: './train-day.component.html',
  styleUrls: ['./train-day.component.css']
})
export class TrainDayComponent implements OnInit{

  @Input() trainDay: TrainDay;
  groupingOptions: SelectItem[] = [];

  constructor(private trainDaysService: TrainDaysService) { }

  ngOnInit(): void {
    this.initGroupings();

    this.trainDaysService.exerciseAdded.subscribe(
      (exercises: Exercise[]) => {
        this.trainDay.exercises = exercises;
      }
    );

    this.trainDaysService.exerciseDeleted.subscribe(
      (exsAfterDeletion: Exercise[]) => {
        this.trainDay.exercises = exsAfterDeletion;
      }
    )

    this.trainDaysService.exerciseEdited.subscribe(
      (exsAfterEdition: Exercise[]) => {
        this.trainDay.exercises = exsAfterEdition;
      }
    )
  }

  initGroupings(): void {
    Groupings.forEach( grp => {
      this.groupingOptions.push(
        {label: grp, value: grp}
      )
    })
  }

  isWeekend(): boolean {
    return this.trainDay.weekDay === 'Sábado' || this.trainDay.weekDay === 'Domingo';
  }

  onEditGroupings(event: any): void {
    this.trainDaysService.changeGroupings(this.trainDay.id, event.value);
  }  
}
