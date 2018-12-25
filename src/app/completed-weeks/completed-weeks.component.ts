import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { CompletedWeeksService } from './completed-weeks.service';

@Component({
  selector: 'app-completed-weeks',
  templateUrl: './completed-weeks.component.html',
  styleUrls: ['./completed-weeks.component.css']
})
export class CompletedWeeksComponent implements OnInit {

  totalWeeks: number[];
  completedWeeks: number[];
  faPlusCircle: IconDefinition = faPlusCircle;
  faMinusCircle: IconDefinition = faMinusCircle;

  constructor(private completedWeeksService: CompletedWeeksService) { }

  ngOnInit() {
    this.totalWeeks = this.completedWeeksService.getTotalWeeks();
    this.completedWeeks = this.completedWeeksService.getCompletedWeeks();
    this.completedWeeksService.totalWeeksChanged.subscribe(
      (totalWeeks: number[]) => { this.totalWeeks = totalWeeks }
    )

    this.completedWeeksService.completedWeeksChanged.subscribe(
      (completedWeeks: number[]) => { this.completedWeeks = completedWeeks }
    )
  }

  onAddWeek() {
    this.completedWeeksService.addToTotalWeeks();
  }

  onRemoveWeek() {
    this.completedWeeksService.removeFromTotalWeeks();
  }

  onToggleWeekCompleted(week: number) {
    if (this.completedWeeks.some(w => w === week)){
      this.completedWeeksService.addToCompletedWeeks(week);
    } else {
      this.completedWeeksService.removeFromCompletedWeeks(week);
    }
  }

}
