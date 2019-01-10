import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isAddTimerVisible = false;
  constructor() { }

  logCountdownEnd() {
    console.log('the countdown has finished');
  }

  public showAddTimer(){
    this.isAddTimerVisible = true;
  }

  public hideAddTimer() {
    this.isAddTimerVisible = false;
  }
}
