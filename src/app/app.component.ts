import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CatalogueFrontEnd';
username="";
constructor(private router:Router, private authenticationServ:AuthenticationService){}

ngOnInit()
{
  this.authenticationServ.loadToken();
}



  isAdmin(){
    return this.authenticationServ.isAdmin();
  }
  
  
  isUser(){
    return this.authenticationServ.isUser();
  }


  isAuthenticated()
  {return this.authenticationServ.isAuthenticated();}

logout()
 {

    this.authenticationServ.logout();
    this.router.navigateByUrl("/");
  }

}
