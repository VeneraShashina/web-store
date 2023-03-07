import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from 'src/model/cartItem';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  protected _items = new BehaviorSubject<CartItem[]>([]);

  constructor() { }

  items(): Observable<CartItem[]> {
    return this._items.asObservable();
  }

  
  addItem(product: Product) {
    let item = this._items.getValue().find(i => i.product.id == product.id);
    if (!item) {
      let newItem: CartItem = { product: product, quantity: 1 };
      let items = this._items.getValue();
      items.push(newItem);
      this._items.next(items);
    }
  }
}
