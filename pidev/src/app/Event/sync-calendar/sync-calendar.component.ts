import {Component, OnInit, ViewChild} from '@angular/core';
import {Schedule, ScheduleComponent, EventSettingsModel, View} from '@syncfusion/ej2-angular-schedule';
import {ButtonComponent} from '@syncfusion/ej2-angular-buttons';
import {EventService} from "../Service/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthentifService} from "../Service/authentif.service";

@Component({
  selector: 'app-sync-calendar',
  template: `
      <button #addButton ejs-button id="addButton" type="button" content="Add" (click)="onButtonClick()"></button>
      <ejs-schedule #scheduleObj width='100%' height='520px' [selectedDate]="selectedDate"
                    [eventSettings]="eventSettings" [views]="scheduleViews"></ejs-schedule>`,  //templateUrl: './sync-calendar.component.html',
  styleUrls: ['./sync-calendar.component.css']
})
export class SyncCalendarComponent implements OnInit {

  constructor(private eventService: EventService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthentifService) {
  }

  listEvent: { Id: any; Subject: any; StartTime: any; EndTime: any; }[] = []

  ngOnInit(): void {
    this.getAllEvent();
    console.log(this.eventSettings)
  }

  @ViewChild("scheduleObj")
  public scheduleObj: ScheduleComponent;
  @ViewChild("addButton")
  public addButton: ButtonComponent;
  public selectedDate: Date = new Date(2022, 5, 4);
  public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek', 'Month'];
  public eventSettings: EventSettingsModel = {
    dataSource: this.getAllEvent()
  }

  public onButtonClick(): void {
    let data: Object[] = [{
      Id: 3,
      Subject: 'Conference',
      StartTime: new Date(2022, 5, 4, 9, 0),
      EndTime: new Date(2022, 5, 4, 10, 0),
      IsAllDay: true
    }, {
      Id: 4,
      Subject: 'Meeting',
      StartTime: new Date(2022, 4, 15, 10, 0),
      EndTime: new Date(2022, 4, 15, 11, 30),
      IsAllDay: true
    }];
    this.scheduleObj.addEvent(data);
    this.addButton.element.setAttribute('disabled', 'true');
    this.scheduleObj.addEvent(data);

  }

  i: number;

  getAllEvent() {
    let list: { Id: any; Subject: any; StartTime: any; EndTime: any; }[] = []
    this.eventService.getEvent().subscribe(async (data) => {
      await data.map((event: any) => {
        let x = {
          Id: event.id,
          Subject: event.name,
          StartTime: new Date(event.finalDateRquest.split('T')[0]),
          EndTime: new Date(event.date.split('T')[0]),
        }
        console.log(x);
        list.push(x);

      })
      //this.listEvent=list
      this.listEvent = [...list];
      console.log(this.eventSettings);
    });
    return list
  }


}
