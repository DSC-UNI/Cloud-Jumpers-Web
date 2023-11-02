import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';

//conexión al backend por API

import { HttpClientModule } from '@angular/common/http';
import { DoctorComponent } from './components/doctor/doctor.component';
import { CrearHistoriaComponent } from './components/crear-historia/crear-historia.component';
import { BuscarHistoriaComponent } from './components/buscar-historia/buscar-historia.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatbotComponent,
    FooterComponent,
    NavbarComponent,
    DoctorComponent,
    CrearHistoriaComponent,
    BuscarHistoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //conexión al backend por API
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
