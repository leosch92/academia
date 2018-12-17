import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DayListComponent } from './day-list/day-list.component';
import { TrainDayComponent } from './day-list/train-day/train-day.component';
import { AddExerciseComponent } from './day-list/train-day/add-exercise/add-exercise.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DayListComponent,
    TrainDayComponent,
    AddExerciseComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
