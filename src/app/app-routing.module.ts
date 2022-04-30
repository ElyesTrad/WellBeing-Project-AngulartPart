import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCollaborationComponent } from './collaboration-admin/add-collaboration/add-collaboration.component';
import { ListCollaborationComponent } from './collaboration-admin/list-collaboration/list-collaboration.component';
import { HomeClientComponent } from './cote-client/home-client/home-client.component';
import { InstructionsComponent } from './cote-client/instructions/instructions.component';
import { LoadQuizComponent } from './cote-client/load-quiz/load-quiz.component';
import { QuizzHomeComponent } from './cote-client/quizz-home/quizz-home.component';
import { StartComponent } from './cote-client/start/start.component';

import { AddCategoryComponent } from './dashboard-admin/add-category/add-category.component';
import { AddQuestionsComponent } from './dashboard-admin/add-questions/add-questions.component';
import { AddQuizzComponent } from './dashboard-admin/add-quizz/add-quizz.component';
import { HomeAdminComponent } from './dashboard-admin/home-admin/home-admin.component';
import { UpdateQuizComponent } from './dashboard-admin/update-quiz/update-quiz.component';

import { ViewQuizQuestionsComponent } from './dashboard-admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './dashboard-admin/view-quizzes/view-quizzes.component';
import { ViewsCategoriesComponent } from './dashboard-admin/views-categories/views-categories.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'accueil',component:HomeClientComponent},
  {path:'quizzuser', component:QuizzHomeComponent,children:[{
    path:':catId',
    component:LoadQuizComponent },
    {
      path:'instructions/:idQuiz',
      component:InstructionsComponent },
      {
        path:'start/:idQuiz',
        component:StartComponent }

  ]},
  {path:'dashboardAdmin',component:HomeAdminComponent ,children:[{
    path:'categories',
    component:ViewsCategoriesComponent
  },
  {path:'add-category',
  component:AddCategoryComponent

  }, {path:'quizzes',
  component:ViewQuizzesComponent

  },
  {path:'add-quizz',
  component:AddQuizzComponent

  },
  {path:'quiz/:idQuiz',
  component:UpdateQuizComponent

  },
  {path:'view-questions/:idQuiz/:title',
  component:ViewQuizQuestionsComponent 

  },
  {path:'add-questions/:idQuiz/:title',
  component:AddQuestionsComponent 

  }

  
]},
  {path:'listCollaboration',component:ListCollaborationComponent},
  {path:'addCollaborator',component:AddCollaborationComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
