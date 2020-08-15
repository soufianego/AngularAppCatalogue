import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/services/catalogue.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})

export class AdminCategoriesComponent implements OnInit {
currentCategories;
  categories;
  mode="list";
  constructor(private catalogueService:CatalogueService) { }

  ngOnInit() {

    this.chargerCategories();

  }

  chargerCategories()
  {
  this.catalogueService.getAllCategories()
    .subscribe(data =>{
    
      this.categories=data;
      
  },err =>{
console.log(err); });
  
}

onNewCat()
{
  this.mode='new-cat';
}

onSaveCat(data)
{
  let url=this.catalogueService.host+"/categories";
  this.catalogueService.postRessourse(url,data)
  .subscribe(data =>{
  
    this.mode='list';
    this.chargerCategories();
    
},err =>{
console.log("erreur"); });
}

onUpdateCat(data)
{
  
  this.catalogueService.patchRessourse(this.currentCategories._links.self.href,data)  // patchRessourse et comme PutRessource voir detail dans le service catalogue
  .subscribe(data =>{
  
    this.mode='list';
    this.chargerCategories();
    
},err =>{
console.log("erreur"); });
}


  onDeleteCat(cat)
  {
    let c=confirm("Etes vous sure de supprimer?");
    if(!c) return;

    this.catalogueService.deleteRessourse(cat._links.self.href)
    .subscribe(data =>{
    
      alert("suppresion OK");
      this.chargerCategories();
      
  },err =>{
console.log("erreur"); });
    
  }

  onEditCat(cat)
  {
this.catalogueService.getRessource(cat._links.self.href)  // puisqu'on travail avec restRepository ; le id de chaque classe se trouve dans cat._links.self.href
.subscribe(data =>{
    this.currentCategories=data;
this.mode="edit-cat";
  
},err =>{
console.log("erreur"); });



}


}

