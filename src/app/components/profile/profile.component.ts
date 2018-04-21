
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Globals } from '../../../../global';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
user :any;
  constructor(private authservice : AuthService,private router : Router, public g : Globals) { }

  ngOnInit() {
  this.authservice.getuser().subscribe((data:any)=>{
  this.user = data;
  this.user = JSON.stringify(this.user);
  
  console.log(this.user);
  },
  (err:HttpErrorResponse)=>{
    
    console.log(err.message);}

  
  );
  
  }

}
