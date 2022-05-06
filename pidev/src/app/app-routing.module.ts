import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCollaborationComponent } from './collaboration-admin/add-collaboration/add-collaboration.component';
import { ListCollaborationComponent } from './collaboration-admin/list-collaboration/list-collaboration.component';
import { HomeClientComponent } from './cote-client/home-client/home-client.component';
import { HomeAdminComponent } from './dashboard-admin/home-admin/home-admin.component';
import { EventComponent } from './Event/event-admin/event.component';
import { EventClientComponent } from './Event/event-client/event-client/event-client.component';
import {ModelEventAdminComponent} from "./Event/model-event-admin/model-event-admin.component";
import {ModelEventClientComponent} from "./Event/model-event-client/model-event-client.component";
import {DetailEventComponent} from "./Event/detail-event/detail-event.component";
import {CalendarComponent} from "./Event/calendar/calendar.component";
import {SyncCalendarComponent} from "./Event/sync-calendar/sync-calendar.component";
import {GameComponent} from "./Event/game/game.component";

const routes: Routes = [
  {path:'',component:HomeClientComponent},
  {path:'dashboardAdmin',component:HomeAdminComponent},
  {path:'listCollaboration',component:ListCollaborationComponent},
  {path:'addCollaborator',component:AddCollaborationComponent},
  {path:'event',component:ModelEventAdminComponent},
  {path:'eventClient',component:ModelEventClientComponent},
  {path:'detailEvent',component:DetailEventComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'cal',component:SyncCalendarComponent},
  {path:'game',component:GameComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
