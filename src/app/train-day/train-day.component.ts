import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from './exercise';


@Component({
  selector: 'app-train-day',
  templateUrl: './train-day.component.html',
  styleUrls: ['./train-day.component.css']
})
export class TrainDayComponent implements OnInit {

  @Input() day: string;

  constructor() { }

  public get exercises() : Exercise[] {
    switch (this.day) {
      case 'segunda':
        return [
          new Exercise('Supino reto máquina', 3, {min: 8, max: 12}, 25),
          new Exercise('Flexão básica', 3, {min: 8, max: 12}),
          new Exercise('Supino inclinado com halteres', 4, {min: 8, max: 12}, 14),
          new Exercise('Voador Peitoral', 3, {min: 8, max: 12}, 45),
          new Exercise('Tríceps no banco', 3, {min: 8, max: 12}),
          new Exercise('Extensão de halteres cabeça', 3, {min: 8, max: 12}, 5),
          new Exercise('Tríceps na polia c/ corda', 4, {min: 8, max: 12}, 7.5)
        ];
      // case 'quarta':
      //   return [
      //     'Barra supinada - 3x 31',
      //     'Puxada triângulo - 4x 42.5',
      //     'Remada curvada - 3x 25',
      //     'Crucifixo invertido com halteres - 3x 2',
      //     'Bíceps rosca com halteres - 3x 8',
      //     'Martelo inclinado no banco com halteres - 3x 5',
      //     'Rosca pulley - 4x 10'
      //   ];
      // case 'sexta':
      //   return [
      //     'Agachamento livre - 4x 10',
      //     'Hack machine - 3x 15',
      //     'Afundo - 4x 6',
      //     'Cadeira Extensora Unilateral - 3x 10',
      //     'Mesa flexora - 3x 30',
      //     'Panturrilha unilateral - 3x',
      //     'Desenvolvimento Arnold 4x 10',
      //     'Extensão lateral unilateral com halteres - 3x 3',
      //     'Elevação frontal barra - 3x  10'
      //   ];
      default:
        return [];
    }
    
  }
  
  public get grupamento() : string {
    switch (this.day) {
      case 'segunda':
        return 'Peito/Tríceps';
      case 'quarta':
        return 'Costas/Bíceps';
      case 'sexta':
        return 'Perna/Ombros';
      default:
        return '';
    }
  }

  capitalize(text: string): string{
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  ngOnInit() {
  }

}
