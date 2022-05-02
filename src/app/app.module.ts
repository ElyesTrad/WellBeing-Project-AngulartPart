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
import { MatListModule} from '@angular/material/list';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ViewsCategoriesComponent } from './dashboard-admin/views-categories/views-categories.component';
import {MatIconModule} from '@angular/material/icon';
import { AddCategoryComponent } from './dashboard-admin/add-category/add-category.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ViewQuizzesComponent } from './dashboard-admin/view-quizzes/view-quizzes.component';
import { AddQuizzComponent } from './dashboard-admin/add-quizz/add-quizz.component';  
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { UpdateQuizComponent } from './dashboard-admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './dashboard-admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionsComponent } from './dashboard-admin/add-questions/add-questions.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { QuizzHomeComponent } from './cote-client/quizz-home/quizz-home.component';
import { QuizSideBarComponent } from './cote-client/quiz-side-bar/quiz-side-bar.component';
import { LoadQuizComponent } from './cote-client/load-quiz/load-quiz.component';
import { InstructionsComponent } from './cote-client/instructions/instructions.component';
import { StartComponent } from './cote-client/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';



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
    ViewsCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizzComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionsComponent,
    QuizzHomeComponent,
    QuizSideBarComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent
   
    
    

  

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
   MatListModule,
   MatIconModule, MatButtonModule, 
   MatSnackBarModule,
   MatSlideToggleModule,
   MatSelectModule,
   CKEditorModule,
   MatProgressSpinnerModule,
   NgxUiLoaderModule,
   NgxUiLoaderHttpModule.forRoot({
    showForeground:true,
   }),

  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
