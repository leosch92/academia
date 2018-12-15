import { Component, OnInit } from '@angular/core';
import { faPlusSquare, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  faPlusSquare : IconDefinition = faPlusSquare;
  adding : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onAddClick() {
    this.adding = !this.adding;
  }
}
