import { Component, OnInit } from '@angular/core';
import { TrainDay } from '../shared/train-day.model';
import { Exercise } from './train-day/exercise';

@Component({
  selector: 'app-day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.css']
})
export class DayListComponent {
  
  trainDays : TrainDay[] = [
    new TrainDay('Segunda', ['Peito', 'Tríceps'], [
      new Exercise('Supino reto máquina', 3, {min: 8, max: 12}, 25),
      new Exercise('Flexão básica', 3, {min: 8, max: 12}),
      new Exercise('Supino inclinado com halteres', 4, {min: 8, max: 12}, 14),
      new Exercise('Voador Peitoral', 3, {min: 8, max: 12}, 45),
      new Exercise('Tríceps no banco', 3, {min: 8, max: 12}),
      new Exercise('Extensão de halteres cabeça', 3, {min: 8, max: 12}, 5),
      new Exercise('Tríceps na polia c/ corda', 4, {min: 8, max: 12}, 7.5)
    ]),
    new TrainDay('Terça', [], []),
    new TrainDay('Quarta', ['Costas', 'Bíceps'], [
      new Exercise('Barra supinada', 3, {min: 8, max: 12}, 31),
      new Exercise('Puxada triângulo', 4, {min: 8, max: 12}, 42.5),
      new Exercise('Remada curvada', 3, {min: 8, max: 12}, 25),
      new Exercise('Crucifixo invertido com halteres', 3, {min: 8, max: 12}, 2),
      new Exercise('Bíceps rosca com halteres', 3, {min: 8, max: 12}, 8),
      new Exercise('Martelo inclinado no banco com halteres', 3, {min: 8, max: 12}, 5),
      new Exercise('Rosca pulley', 4, {min: 8, max: 12}, 10),
    ]),
    new TrainDay('Quinta', [], []),
    new TrainDay('Sexta', ['Perna', 'Ombros'], [
      new Exercise('Agachamento livre', 3, {min: 12, max: 15}, 10),
      new Exercise('Hack machine', 3, {min: 8, max: 12}, 15),
      new Exercise('Afundo', 3, {min: 8, max: 12}, 6),
      new Exercise('Cadeira Extensora Unilateral', 3, {min: 12, max: 15}, 10),
      new Exercise('Mesa flexora', 3, {min: 12, max: 15}, 30),
      new Exercise('Panturrilha unilateral', 3, {min: 8, max: 12}),
      new Exercise('Desenvolvimento Arnold', 4, {min: 8, max: 12}, 10),
      new Exercise('Extensão lateral unilateral com halteres', 3, {min: 8, max: 12}, 2.5),
      new Exercise('Elevação frontal barra', 3, {min: 8, max: 12}, 10),
    ]),
    new TrainDay('Sábado', [], []),
    new TrainDay('Domingo', [], [])
  ];

  shownTrainDay : TrainDay = null;
  
  constructor() { }

  onDayClick(trainDay: TrainDay) {
    this.shownTrainDay = trainDay;
  }

  isTrainDayFilled(trainDay: TrainDay): boolean{
    return trainDay && trainDay.exercises.length != 0
  }
}
