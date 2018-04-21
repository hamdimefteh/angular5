import { Component } from '@angular/core';
import { Globals } from '../../global';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  title = 'app';
  constructor(public g : Globals) { 

}
taille():string{
  if(this.g.affichemenu){
    return 'col-lg-8 pl-1';
  }
  else return 'col-lg-10 pl-4';
}
}
