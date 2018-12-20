import { Component, Input, OnInit } from '@angular/core';
import { TrainDay } from 'src/app/shared/train-day.model';
import { TrainDayService } from 'src/app/services/train-day.service';
import { Exercise } from './exercise';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Groupings } from 'src/app/shared/constants/groupings.constant';


@Component({
  selector: 'app-train-day',
  templateUrl: './train-day.component.html',
  styleUrls: ['./train-day.component.css']
})
export class TrainDayComponent implements OnInit{

  @Input() trainDay: TrainDay;
  groupingOptions: SelectItem[] = [];

  constructor(private trainDayService: TrainDayService) { }

  ngOnInit(): void {
    this.initGroupings();
  }

  initGroupings(): void {
    Groupings.forEach( grp => {
      this.groupingOptions.push(
        {label: grp, value: grp}
      )
    })
  }

  onDeleteExercise(exercise: Exercise){
    this.trainDayService.deleteExercise(this.trainDay.id, exercise);
  }

  diaDeFeira(): boolean {
    return this.trainDay.weekDay !== 'Sábado' && this.trainDay.weekDay !== 'Domingo';
  }
}
