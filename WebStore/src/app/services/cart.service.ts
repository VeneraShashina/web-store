import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from 'src/model/cartItem';
import { CartStatus } from 'src/model/cartStatus';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  protected _cartStatus = new BehaviorSubject<CartStatus>({ items: [], totalQuantity: 0, totalPrice: 0 })
  constructor() {
  }

  cartStatus(): Observable<CartStatus> {
    return this._cartStatus.asObservable();
  }


  addItem(product: Product) {

    let updatedCart = this._cartStatus.getValue();
    let itemIndex = updatedCart.items.findIndex(i => i.product.id == product.id);
    if (itemIndex >= 0) {
      updatedCart.items[itemIndex].quantity += 1;
      updatedCart.items[itemIndex].totalPrice = updatedCart.items[itemIndex].product.price * updatedCart.items[itemIndex].quantity;
    }
    else
      updatedCart.items.push({ product: product, quantity: 1, totalPrice: product.price });
      
    updatedCart.totalPrice = this.getTotalPrice(updatedCart.items);
    updatedCart.totalQuantity = this.getTotalQuantity(updatedCart.items);

    this._cartStatus.next(updatedCart);
  }

  getTotalQuantity(items: CartItem[]): number {
    return items.reduce((n, { quantity }) => n + quantity, 0);
  }

  getTotalPrice(items: CartItem[]): number {
    return items.reduce((n, { totalPrice }) => n + totalPrice, 0);
  }
}
