import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { FormsModule
} from '@angular/forms';
interface Credentials {
  username: string,
  password: string
}

import { Globals } from '../../../../global';
@Component({
  selector: 'app-appcontent',
  templateUrl: './appcontent.component.html',
  styleUrls: ['./appcontent.component.scss']
})
export class AppcontentComponent implements OnInit {
  
  credentials: Credentials;
  public message = "bad login or password";  
  isloginerror = false;
  constructor(private authservice : AuthService,private router : Router, public g : Globals) { }

  ngOnInit() {
  
  
  }
 onSubmit(credentials){
  
  console.log(JSON.stringify(credentials));
   this.authservice.login(credentials)
   .subscribe((data:any)=>
  { 
    console.log('success');
    localStorage.setItem('usertoken',data.token);
    this.g.notloggin=false;
this.router.navigate(['/home']);
  },
  (err:HttpErrorResponse)=>{
    this.isloginerror=true;
    console.log(err.message);}

  );
 
 }

}
