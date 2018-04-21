

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { isNullOrUndefined } from 'util';
import { logging } from 'selenium-webdriver';
@Injectable()
export class Globals {
    BASE_API_URL: string = 'http://localhost:8080/';
    notloggin :boolean;
    tokencontent :string; 
    affichemenu : boolean=true;
    public logging():void{
        if(localStorage.getItem('usertoken')==null)
        this.notloggin= true ;
        else
        {
        
        this.tokencontent=JSON.stringify(localStorage.getItem('usertoken'));
        this.notloggin = false;
        }
        }
        
}
