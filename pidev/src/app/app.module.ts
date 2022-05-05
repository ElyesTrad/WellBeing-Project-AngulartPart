import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './cote-client/header/header.component';
import { SideBarComponent } from './cote-client/side-bar/side-bar.component';
import { SideChatComponent } from './cote-client/side-chat/side-chat.component';
import { HomeClientComponent } from './cote-client/home-client/home-client.component';
import { AddPostComponent } from './cote-client/add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderAdminComponent } from './dashboard-admin/header-admin/header-admin.component';
import { SideBarAdminComponent } from './dashboard-admin/side-bar-admin/side-bar-admin.component';
import { HomeAdminComponent } from './dashboard-admin/home-admin/home-admin.component';
import { ListCollaborationComponent } from './collaboration-admin/list-collaboration/list-collaboration.component';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCollaborationComponent } from './collaboration-admin/add-collaboration/add-collaboration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { AchievementsComponent } from './Evaluation/achievements/achievements.component';
import { EvaluationComponent } from './Evaluation/evaluation/evaluation.component';
import { AchievementsDetailsComponent } from './Evaluation/achievements-details/achievements-details.component';
import { DashboardachievementComponent } from './Evaluation/dashboardachievement/dashboardachievement.component';
import { achievementsFilterPipe } from './Evaluation/dashboardachievement/achievements-filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import {
  NbThemeModule,
  NbCardModule,
  NbLayoutModule,
  NbChatModule,
  NbInputModule,
  NbButtonModule,
  NbFormFieldModule
} from '@nebular/theme';
import {  QRCodeModule } from 'angular2-qrcode';





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
    LoginComponent,
    RegisterComponent,
    AchievementsComponent,
    EvaluationComponent,
    AchievementsDetailsComponent,
    DashboardachievementComponent,
    achievementsFilterPipe,
  
    
    

    

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
    ToastrModule.forRoot({ timeOut: 3000 }),
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    FormsModule,
    NbLayoutModule,
    NbChatModule,
    NbFormFieldModule,
    NbThemeModule.forRoot({ name: 'default' }),
    QRCodeModule
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
