import {Component, OnInit} from '@angular/core';
import {MonthDay} from "./model/MonthDay";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'calendar',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {

  days: MonthDay[] = [];
  monthHeading: string = '';

  ngOnInit() {
    this.updateCalendar();
    this.updateMonthHeading();
  }

  private updateCalendar() {
    let currentDate = new Date();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    this.appendMonthBeforeDays(firstDay, currentDate);
    this.appendActualMonthDays(lastDay, currentDate);
    this.appendNextMonthDays(lastDay, currentDate);
  }

  private appendNextMonthDays(lastDay: Date, currentDate: Date) {
    for (let i = 1; i <= 7 - lastDay.getDay(); i++) {
      const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i);
      this.days.push(MonthDay.inactiveWithLabel(nextDate.getDate()));
    }
  }

  private appendActualMonthDays(lastDay: Date, currentDate: Date) {
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      if (this.isToday(date))
        this.days.push(MonthDay.actualWithLabel(i));
      else
        this.days.push(MonthDay.withLabel(i));
    }
  }

  private appendMonthBeforeDays(firstDay: Date, currentDate: Date) {
    for (let i = firstDay.getDay(); i > 0; i++) {
      const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0 - i + 1);
      this.days.push(MonthDay.inactiveWithLabel(prevDate.getDay()));
    }
  }

  private isToday(date: Date): boolean {
    return date.toDateString() === new Date().toDateString()
  }

  private updateMonthHeading() {
    const today = new Date();
    this.monthHeading = `${today.toLocaleString('default', { month: 'long' })} ${today.getFullYear()}`;
  }
}
