import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appinscriptionetudiant',
  templateUrl: './appinscriptionetudiant.component.html',
  styleUrls: ['./appinscriptionetudiant.component.scss']
})
export class AppinscriptionetudiantComponent implements OnInit {

  messageet = [{"name":"mot de passe invalide"},
  
  {"name":"mot de passe incorrecte "}];

  messageen = [{"name":"mot de passe invalide"},
  
  {"name":"mot de passe incorrecte "}];


  constructor() { }

  ngOnInit() {
  }

}
