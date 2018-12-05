import { Component } from '@angular/core';
import { Scratcher } from './models/scratcher.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scratchit';
  pageTitle = 'scratchit off the list';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  examples: Scratcher[] = [
    new Scratcher('pick-three', 2, 100),
    new Scratcher('Bingo', 2, 97),
    new Scratcher('Big Five', 5, 120),
    new Scratcher('Tender Spender', 10, 10000)
  ];

  exampleMethod() {
    alert('this was touched');
  }
}
