import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayListComponent } from '../day-list/day-list.component';
import { CompletedWeeksComponent } from '../completed-weeks/completed-weeks.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'train', component: DayListComponent},
  {path: 'completed-weeks', component: CompletedWeeksComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
