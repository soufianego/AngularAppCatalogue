import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProduitsComponent } from './produits/produits.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { CatalogueService } from '../services/catalogue.service';
import { LoginComponent } from './login/login.component';

import { FormsModule} from '@angular/forms';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProduitsComponent,
    LoginComponent,
    AdminCategoriesComponent,
    AdminProductsComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [CatalogueService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
