import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/services/catalogue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private router:Router,private catService:CatalogueService) { }
categories;
currentCategory;
  
ngOnInit() {
   this.catService.getAllCategories()
       .subscribe(data =>{
    
        this.categories=data;
        
    },err =>{
  console.log(err); })

  }
  
onGetProduct(cat){
this.currentCategory=cat;
  let url=cat._links.products.href;
this.router.navigateByUrl("products/"+btoa(url));
}

}
