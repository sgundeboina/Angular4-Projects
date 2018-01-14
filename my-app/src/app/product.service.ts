import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ProductService {
  private baseUrl = 'http://localhost:57592/api/products';

  constructor( private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl) .pipe();
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe();    
  }

   
  deleteProduct(prd: Product | number): Observable<Product> {
    const id = typeof prd === 'number' ? prd : prd.id;
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Product>(url, httpOptions).pipe();
  }

  
  updateProduct(prd: Product): Observable<any> {
    const id = typeof prd === 'number' ? prd : prd.id;
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url, prd, httpOptions).pipe();
  }
  
}
