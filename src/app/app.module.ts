import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DayListComponent } from './day-list/day-list.component';
import { TrainDayComponent } from './day-list/train-day/train-day.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrainDayOptionsComponent } from './day-list/train-day/train-day-options/train-day-options.component';
import { AddExerciseComponent } from './day-list/train-day/train-day-options/add-exercise/add-exercise.component';
import { TrainDayTableComponent } from './day-list/train-day/train-day-table/train-day-table.component';
import { CompletedWeeksComponent } from './completed-weeks/completed-weeks.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DayListComponent,
    TrainDayComponent,
    AddExerciseComponent,
    TrainDayOptionsComponent,
    TrainDayTableComponent,
    CompletedWeeksComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
