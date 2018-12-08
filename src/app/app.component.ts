import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'academia';

  
  public get dias() : string[] {
    return ['segunda', 'quarta', 'sexta'];
  }
  
}
