import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppcontentComponent } from './components/appcontent/appcontent.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppasideComponent } from './components/appaside/appaside.component';
import { AppinscriptionetudiantComponent } from './components/appinscriptionetudiant/appinscriptionetudiant.component';
import { AppRoutingModule ,RoutingComponents } from './app-routing/app-routing.module';
import { ApphomeComponent } from './components/apphome/apphome.component';
import { AppinscriptionComponent } from './components/appinscription/appinscription.component';
import { AppinscriptionenseignantComponent } from './components/appinscriptionenseignant/appinscriptionenseignant.component';
import {AuthService} from './services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { Globals } from '../../global';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppcontentComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppasideComponent,
    AppinscriptionetudiantComponent,
    RoutingComponents,
    ApphomeComponent,
    AppinscriptionComponent,
    AppinscriptionenseignantComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  MDBBootstrapModule.forRoot(),
    AppRoutingModule,
   FormsModule
  
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    AuthService,Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
