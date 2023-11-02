import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router"
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { BuscarHistoriaComponent } from './components/buscar-historia/buscar-historia.component';
import { CrearHistoriaComponent } from './components/crear-historia/crear-historia.component';



const routes: Routes= [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:"home", component: HomeComponent},
  {path:"chatbot", component: ChatbotComponent},
  {
    path: 'doctor',
    component: DoctorComponent,
    children: [
      { path: 'crear-historia', component: CrearHistoriaComponent },
      { path: 'buscar-historia', component: BuscarHistoriaComponent },
    ],
  },
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
