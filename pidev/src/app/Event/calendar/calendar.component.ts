import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarOptions, FullCalendarComponent} from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
     dateClick: this.handleDateClick.bind(this), // bind is important!
     events: [
       { title: 'event 1', date: '2022-04-30' },
       { title: 'event 2', date: '2019-04-02' }
     ]
   };
   handleDateClick(arg:any ) {
     alert('date click! ' + arg.dateStr)
   }

 /* someMethod() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }*/
}
