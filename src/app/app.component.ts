import { AfterViewInit, Component } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  constructor(private timerService: TimerService) {}

  public ngAfterViewInit() {
    this.timerService.start();
  }
}