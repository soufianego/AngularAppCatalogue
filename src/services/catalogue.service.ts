import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

public host:string="http://localhost:8077"

  constructor(private http : HttpClient, private authenticationService:AuthenticationService) { }



getAllCategories()
{
  return this.http.get(this.host+"/categories");

}

getRessource(url){
  return this.http.get(url);
}

deleteRessourse(url)
{
  this.authenticationService.loadToken();
  let jwtToken= this.authenticationService.jwt;
  return this.http.delete(url,
    { headers:new HttpHeaders({'Authorization':jwtToken})} )  ;
}



postRessourse(url,data)
{
  this.authenticationService.loadToken();
  let jwtToken= this.authenticationService.jwt;
  return this.http.post(url,data,
    { headers:new HttpHeaders({'Authorization':jwtToken})} )  ;

}

putRessourse(url,data)
{
  this.authenticationService.loadToken();
  let jwtToken= this.authenticationService.jwt;
  return this.http.put(url,data,
    { headers:new HttpHeaders({'Authorization':jwtToken})} )  ; //patch est comme put sauf que le patch permet de modifier seulement ce qui est envoyé dans la data , alors que put il met null les autres parametres de la classe non definit dans la data enovyé a partir du formulaire !!! tres important

  }

//patch est comme put sauf que le patch permet de modifier seulement ce qui est envoyé dans la data , alors que put il met null les autres parametres de la classe non definit dans la data enovyé a partir du formulaire !!! tres important
patchRessourse(url,data)
{
  this.authenticationService.loadToken();
  let jwtToken= this.authenticationService.jwt;
  return this.http.patch(url,data,
    { headers:new HttpHeaders({'Authorization':jwtToken})} )  ; 

}


}
