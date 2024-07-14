import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit {

  public timeString: string = '00:00';
  public secondsString: string = '00';

  ngOnInit(): void {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock(): void {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    this.timeString = `${hours}:${minutes}`;
    this.secondsString = `${seconds}`;
  }
}
