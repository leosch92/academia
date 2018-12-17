import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { faPlusSquare, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  @ViewChild('exerciseInput') exerciseInput : ElementRef;
  @ViewChild('seriesNumberInput') seriesNumberInput : ElementRef;
  @ViewChild('repsNumberMin') repsNumberMinInput : ElementRef;
  @ViewChild('repsNumberMax') repsNumberMaxInput : ElementRef;
  @ViewChild('weightInput') weightInput : ElementRef;

  @Output() exerciseAdded : EventEmitter<Exercise> = new EventEmitter<Exercise>(); 
  faPlusSquare : IconDefinition = faPlusSquare;
  adding : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onAddClick() {
    this.adding = !this.adding;
  }

  onAddItem(): void{
    this.exerciseAdded.emit(
      new Exercise(
        this.exerciseInput.nativeElement.value,
        this.seriesNumberInput.nativeElement.value,
        {
          min: this.repsNumberMinInput.nativeElement.value,
          max: this.repsNumberMaxInput.nativeElement.value
        },
        this.weightInput.nativeElement.value
      )
    );
  }
}
