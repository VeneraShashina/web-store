import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  protected _baseAddress ="https://fakestoreapi.com/products";
  
  constructor(protected http: HttpClient) {
 
   
}

getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._baseAddress);
}

protected handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
        console.error('An error occurred:', error.error);
    } else {
        console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => error);
}


}
