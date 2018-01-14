import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-edit-component.html'
})
export class ProductEditComponent implements OnInit {
  pageTitle: string = 'Product Edit';
  product: Product;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private productService: ProductService, private location: Location) { }

  ngOnInit(): void {
    this.getProduct();
    
  }


  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(prod => this.product = prod);
  }


  saveProduct(): void {
    this.productService.updateProduct(this.product)
      .subscribe(prod => {
        this.product = prod;
        this.errorMessage = "Updated";
      });

  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.product)
      .subscribe(() => {
        this.errorMessage = "Updated";
        this.goBack();
      });

  }


  goBack(): void {
    this.location.back();
  }

}

