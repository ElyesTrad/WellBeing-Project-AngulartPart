import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCollaborationComponent } from './collaboration-admin/add-collaboration/add-collaboration.component';
import { ListCollaborationComponent } from './collaboration-admin/list-collaboration/list-collaboration.component';
import { HomeClientComponent } from './cote-client/home-client/home-client.component';
import { HomeAdminComponent } from './dashboard-admin/home-admin/home-admin.component';
import { DetailComponent } from './detail/detail.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { MonitorComponent } from './monitor/monitor.component';
import { CompetitionComponent } from './opta/competition/competition.component';
import { OptaComponent } from './opta/opta.component';
import { RoomComponent } from './opta/room/room.component';
import { TimeslotComponent } from './opta/timeslot/timeslot.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SuccessComponent } from './success/success.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'accueil',component:HomeClientComponent},
  {path:'dashboardAdmin',component:HomeAdminComponent},
  {path:'listCollaboration',component:ListCollaborationComponent},
  {path:'addCollaborator',component:AddCollaborationComponent},
  {path:'register',component:RegisterComponent},
  {path:'detail/:username',component:DetailComponent},
  {path:'users',component:UserlistComponent},
  {path:'login',component:LoginComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'update/:id',component:UpdateUserComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'success',component:SuccessComponent},
  {path:'opta',component:OptaComponent},
  {path:'Room',component:RoomComponent},
  {path:'timeslot',component:TimeslotComponent},
  {path:'comp',component:CompetitionComponent},
  {path:'monitor',component:MonitorComponent},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
