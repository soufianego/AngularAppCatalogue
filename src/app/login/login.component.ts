import { Component, OnInit, ɵConsole } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private authenticationServ:AuthenticationService) { }

  ngOnInit() {
  }


  register()
  {
    alert('voir le projet workspace/TaskFrontEnd');
  }
  onLogin(data)
  {
    console.log(data);
  this.authenticationServ.login(data)
  .subscribe(resp =>{
  
    let jwtToken=resp.headers.get('Authorization');
    this.authenticationServ.saveTokenOnLocalStorage(jwtToken);
    this.router.navigateByUrl("/");
  },err =>{
    console.log(err);
});

}



}
