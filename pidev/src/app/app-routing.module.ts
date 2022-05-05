import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCollaborationComponent } from './collaboration-admin/add-collaboration/add-collaboration.component';
import { ListCollaborationComponent } from './collaboration-admin/list-collaboration/list-collaboration.component';
import { HomeClientComponent } from './cote-client/home-client/home-client.component';
import { HomeAdminComponent } from './dashboard-admin/home-admin/home-admin.component';
import { AchievementsDetailsComponent } from './Evaluation/achievements-details/achievements-details.component';
import { AchievementsComponent } from './Evaluation/achievements/achievements.component';
import { DashboardachievementComponent } from './Evaluation/dashboardachievement/dashboardachievement.component';
import { EvaluationComponent } from './Evaluation/evaluation/evaluation.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'accueil',component:HomeClientComponent},
  {path:'dashboardAdmin',component:HomeAdminComponent},
  {path:'listCollaboration',component:ListCollaborationComponent},
  {path:'addCollaborator',component:AddCollaborationComponent},
  {path:'register',component:RegisterComponent},
  {path:'achievements',component:AchievementsComponent},
  {path :'achievements/achievementsdetails/:idAchievements',component:AchievementsDetailsComponent},
  {path:'evaluation',component:EvaluationComponent},
  {path:'dashboardachievements',component:DashboardachievementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
