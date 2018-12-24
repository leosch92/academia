import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { ArrayUtil } from '../utils/array.util'

@Component({
  selector: 'app-completed-weeks',
  templateUrl: './completed-weeks.component.html',
  styleUrls: ['./completed-weeks.component.css']
})
export class CompletedWeeksComponent implements OnInit {

  totalWeeks: number[] = [];
  numberOfTotalWeeks = 4;
  completedWeeks: number[] = [1, 2, 3, 4, 5, 6];
  faPlusCircle: IconDefinition = faPlusCircle;
  faMinusCircle: IconDefinition = faMinusCircle;

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= this.numberOfTotalWeeks; i++){
      this.totalWeeks.push(i);
    }
  }

  onAddWeek() {
    this.totalWeeks.push(++this.numberOfTotalWeeks);
  }

  onRemoveWeek() {
    ArrayUtil.remove(this.completedWeeks, this.numberOfTotalWeeks);
    this.numberOfTotalWeeks--;
    this.totalWeeks.pop();
  }

  onToggleWeekCompleted(week: number) {
    if (this.completedWeeks.some(w => w == week)){
      ArrayUtil.remove(this.completedWeeks, week);
    } else {
      this.completedWeeks.push(week);
    }
  }

}
