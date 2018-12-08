import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiaDeTreinoComponent } from './dia-de-treino/dia-de-treino.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaDeTreinoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
