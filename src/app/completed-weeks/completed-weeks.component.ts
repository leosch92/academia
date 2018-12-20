import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-completed-weeks',
  templateUrl: './completed-weeks.component.html',
  styleUrls: ['./completed-weeks.component.css']
})
export class CompletedWeeksComponent implements OnInit {

  totalWeeks: number[] = [1, 2, 3, 4, 5, 6 , 7, 8];
  completedWeeks: number[] = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit() {
  }

}
