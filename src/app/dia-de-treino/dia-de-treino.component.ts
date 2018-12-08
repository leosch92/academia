import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dia-de-treino',
  templateUrl: './dia-de-treino.component.html',
  styleUrls: ['./dia-de-treino.component.css']
})
export class DiaDeTreinoComponent implements OnInit {

  @Input() dia: string;

  constructor() { }

  public get exercicios() : string[] {
    switch (this.dia) {
      case 'segunda':
        return [
          'Supino reto máquina - 3x 25',
          'Flexão básica - 3x',
          'Supino inclinado com halteres - 4x 14',
          'Voador Peitoral - 3x 45',
          'Tríceps no banco - 3x',
          'Extensão de halteres cabeça - 3x 5',
          'Tríceps na polia c/ corda - 4x 7.5'
        ];
      case 'quarta':
        return [
          'Barra supinada - 3x 31',
          'Puxada triângulo - 4x 42.5',
          'Remada curvada - 3x 25',
          'Crucifixo invertido com halteres - 3x 2',
          'Bíceps rosca com halteres - 3x 8',
          'Martelo inclinado no banco com halteres - 3x 5',
          'Rosca pulley - 4x 10'
        ];
      case 'sexta':
        return [
          'Agachamento livre - 4x 10',
          'Hack machine - 3x 15',
          'Afundo - 4x 6',
          'Cadeira Extensora Unilateral - 3x 10',
          'Mesa flexora - 3x 30',
          'Panturrilha unilateral - 3x',
          'Desenvolvimento Arnold 4x 10',
          'Extensão lateral unilateral com halteres - 3x 3',
          'Elevação frontal barra - 3x  10'
        ];
      default:
        return [];
    }
    
  }
  
  public get grupamento() : string {
    switch (this.dia) {
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
