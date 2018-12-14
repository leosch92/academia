import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DayListComponent } from './day-list/day-list.component';
import { TrainDayComponent } from './day-list/train-day/train-day.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DayListComponent,
    TrainDayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
