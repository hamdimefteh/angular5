import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../../global';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss']
})
export class AppheaderComponent implements OnInit {
  log :string ;
  constructor( public g : Globals,private router:Router) { 
    g.logging();
  }

  ngOnInit() {
  }
 onclick(){
 console.log(this.g.notloggin);
 localStorage.removeItem('usertoken');
 this.g.logging();
 console.log(this.g.notloggin);
this.router.navigate(['./authentification']);
 }

 menu1(){
 this.g.affichemenu = !this.g.affichemenu;
  }
}

