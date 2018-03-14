import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appinscriptionenseignant',
  templateUrl: './appinscriptionenseignant.component.html',
  styleUrls: ['./appinscriptionenseignant.component.scss']
})
export class AppinscriptionenseignantComponent implements OnInit {
  messageen = [{"name":"mot de passe invalide"},
  
  {"name":"mot de passe incorrecte "}];
  constructor() { }

  ngOnInit() {
  }

}
