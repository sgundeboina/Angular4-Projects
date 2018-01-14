import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';

import { ProductEditComponent } from './product-edit-component';
import { ProductService } from './product.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
    AlertModule.forRoot(),
    RouterModule.forRoot([
      
      { path: 'productEdit/:id', component: ProductEditComponent },
      { path: '', component: ProductEditComponent },
      { path: '**', component: ProductEditComponent }
    ])
  ],
  declarations: [
    AppComponent,    
    ProductEditComponent
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
