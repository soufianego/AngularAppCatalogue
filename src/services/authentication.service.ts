import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
host2:string="http://localhost:8088";

jwt:string="";
username;
private roles:Array<any>=[];



  constructor(private http:HttpClient) { }


login(data)
{
return this.http.post(this.host2+"/login",data,
{observe:'response'});

}

saveTokenOnLocalStorage(token)
{
  localStorage.setItem("token",token);

this.jwt=token;
this.parseJWT();
}

parseJWT()
{
  if(this.jwt!=null){
  let jwtHelper=new JwtHelperService();
  this.username=jwtHelper.decodeToken(this.jwt).sub;
 this.roles= jwtHelper.decodeToken(this.jwt).roles;

 for (let r of this.roles)
 console.log(r.authority);
}
}

isAdmin()
{
  for (let r of this.roles)
  {
    if(r.authority=="ADMIN")
   {return true;}
  }
  return false;
}

isUser()
{
  for (let r of this.roles)
  {
    if(r.authority=="USER")
   {return true;}
  }
  return false;
}

isAuthenticated(){
  if( localStorage.getItem("token") )
  {return true;}
  
  return false;
}

loadToken()
{
    this.jwt=localStorage.getItem("token");
    this.parseJWT();
  }

logout(){
  
  localStorage.removeItem('token');
  this.jwt=undefined;
  this.username=undefined;
  this.roles=undefined;
}


}