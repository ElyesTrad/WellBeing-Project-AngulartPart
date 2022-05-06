import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './cote-client/header/header.component';
import {SideBarComponent} from './cote-client/side-bar/side-bar.component';
import {SideChatComponent} from './cote-client/side-chat/side-chat.component';
import {HomeClientComponent} from './cote-client/home-client/home-client.component';
import {AddPostComponent} from './cote-client/add-post/add-post.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderAdminComponent} from './dashboard-admin/header-admin/header-admin.component';
import {SideBarAdminComponent} from './dashboard-admin/side-bar-admin/side-bar-admin.component';
import {HomeAdminComponent} from './dashboard-admin/home-admin/home-admin.component';
import {ListCollaborationComponent} from './collaboration-admin/list-collaboration/list-collaboration.component';

import {MatSliderModule} from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddCollaborationComponent} from './collaboration-admin/add-collaboration/add-collaboration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {EventComponent} from './Event/event-admin/event.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {EventClientComponent} from './Event/event-client/event-client/event-client.component';
import {ModelEventClientComponent} from './Event/model-event-client/model-event-client.component';
import {ModelEventAdminComponent} from './Event/model-event-admin/model-event-admin.component';
import {DetailEventComponent} from './Event/detail-event/detail-event.component';
import {CalendarComponent} from './Event/calendar/calendar.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import {
  RecurrenceEditorModule,
  ScheduleModule,
  DayService,
  WeekService,
  MonthService,
  MonthAgendaService,
  WorkWeekService
} from "@syncfusion/ej2-angular-schedule";
import {SyncCalendarComponent} from './Event/sync-calendar/sync-calendar.component';
import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";
import {CarouselModule} from "ngx-bootstrap/carousel";
import {NgxPaginationModule} from "ngx-pagination";
import { GameComponent } from './Event/game/game.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    SideChatComponent,
    HomeClientComponent,
    AddPostComponent,
    HeaderAdminComponent,
    SideBarAdminComponent,
    HomeAdminComponent,
    ListCollaborationComponent,
    AddCollaborationComponent,
    EventComponent,
    EventClientComponent,
    ModelEventClientComponent,
    ModelEventAdminComponent,
    DetailEventComponent,
    CalendarComponent,
    SyncCalendarComponent,
    GameComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    ModalModule,
    FullCalendarModule,
    ScheduleModule, RecurrenceEditorModule,
    NgxQRCodeModule,
    CarouselModule,
    NgxPaginationModule

  ],
  providers: [DayService, WeekService, MonthService, MonthAgendaService, WorkWeekService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
