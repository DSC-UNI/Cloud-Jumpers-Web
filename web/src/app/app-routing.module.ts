import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router"
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

const routes: Routes= [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:"home", component: HomeComponent},
  {path:"chatbot", component: ChatbotComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
