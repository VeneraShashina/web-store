import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  protected _baseAddress ="https://fakestoreapi.com/products";
  //protected _products = new BehaviorSubject<Product[]>([]);
  constructor(protected http: HttpClient) {
  //  this.getProducts().subscribe(e => this._products.next(e));
   
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

//products(): Observable<Product[]> {
//    return this._products.asObservable();
//}
}
