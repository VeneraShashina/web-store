import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from 'src/model/cartItem';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  protected _items = new BehaviorSubject<CartItem[]>([]);
  protected _itemsCount = new BehaviorSubject<number>(0);

  constructor() {
this.items().subscribe(i=>
  this._itemsCount.next(
    i.reduce((n,{quantity})=>n+quantity,0)));

   }

  items(): Observable<CartItem[]> {
    return this._items.asObservable();
  }
  itemsCount(): Observable<number> {
    return this._itemsCount.asObservable();
  }


  addItem(product: Product) {

    let itemsToUpdate = this._items.getValue();
    let itemIndex = itemsToUpdate.findIndex(i => i.product.id == product.id);
    console.log(itemIndex);
    if (itemIndex>=0)
      itemsToUpdate[itemIndex].quantity += 1;
    else
      itemsToUpdate.push({ product: product, quantity: 1 });

    this._items.next(itemsToUpdate);
  }
}
