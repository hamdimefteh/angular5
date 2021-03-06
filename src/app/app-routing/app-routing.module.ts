import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppinscriptionetudiantComponent } from '../components/appinscriptionetudiant/appinscriptionetudiant.component';
import { AppinscriptionenseignantComponent } from '../components/appinscriptionenseignant/appinscriptionenseignant.component';
import { AppinscriptionComponent } from '../components/appinscription/appinscription.component';
import { AppcontentComponent } from '../components/appcontent/appcontent.component';
import { ApphomeComponent } from '../components/apphome/apphome.component';
import { StudentpageComponent } from '../user/studentpage/studentpage.component';
import {CanActivate} from "@angular/router";
import { ProfileComponent } from '../components/profile/profile.component';

const routes: Routes = [
  {path:'inscriptionenseignant' , component : AppinscriptionenseignantComponent },
  {path:'inscriptionetudiant' , component : AppinscriptionetudiantComponent },
  {path:'authentification' , component : AppcontentComponent },
  {path:'home' , component : ApphomeComponent },
  {path:'' , component : ApphomeComponent },
  {path:'inscription' , component : AppinscriptionComponent },
  {path:'profile' , component : ProfileComponent },

    {path:'**' , component : ApphomeComponent },
];


@NgModule({
  imports: [
  
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AppinscriptionetudiantComponent];
