import { Component } from '@angular/core';
import { LoggerService } from 'logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stewart App';

  constructor(private loggerService: LoggerService){
    this.loggerService.log("----Log Start----");
  }
}
