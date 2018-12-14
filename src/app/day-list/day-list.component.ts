import { Component, OnInit } from '@angular/core';
import { TrainDay } from '../shared/train-day.model';

@Component({
  selector: 'app-day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.css']
})
export class DayListComponent implements OnInit {

  trainDays : TrainDay[] = [
    new TrainDay('Segunda', ['Peito', 'Tríceps'], []),
    new TrainDay('Terça', [], []),
    new TrainDay('Quarta', ['Costas', 'Bíceps'], []),
    new TrainDay('Quinta', [], []),
    new TrainDay('Sexta', ['Perna', 'Ombros'], []),
    new TrainDay('Sábado', [], []),
    new TrainDay('Domingo', [], [])
  ];

  constructor() { }

  ngOnInit() {
  }

}
