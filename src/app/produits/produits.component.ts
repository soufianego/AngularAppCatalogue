import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/services/catalogue.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  products;
  
  constructor(private router:Router,private route:ActivatedRoute,private catService:CatalogueService) { 
  
  // on dois ecouter url par un evenement (listner) pour que notre template effectue le changement automatiquement , c a d lorsqu'on clique pour la deuxieme fois a une autre categorie , le resultat dois s'afficher dans notre template produit
  
  this.router.events.subscribe(event =>{
    if(event instanceof NavigationEnd)
   { let param=this.route.snapshot.params.urlProds;
     let url=atob(param);

     this.catService.getRessource(url)
    .subscribe(data =>{
     this.products=data;
     },err =>{
      console.log(err);});
     }
  });
    
  }

  ngOnInit() {
 

  }

}
