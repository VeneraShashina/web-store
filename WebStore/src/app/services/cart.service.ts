import { Injectable } from '@angular/core';
import { BehaviorSubject, find, map, pipe, Observable, Observer } from 'rxjs';
import {Store} from '@ngrx/store'
import { CartItem } from 'src/app/model/cartItem';
import { CartStatus } from 'src/app/model/cartStatus';
import { Product } from 'src/app/model/product';
import { CartActionTypes } from '../shopping-cart/state/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  protected _cartItems: CartItem[] = [];
  protected cartItems = new BehaviorSubject<CartItem[]>([]);

  constructor(private store: Store<any>) {
    //this.store.dispatch({type: "LOAD_CART"});
    //this.store.subscribe(state=>(this._cartItems=state.items))

   /* this.store.dispatch({ type:  CartActionTypes.LOAD_CART});
    console.log('dispatched');
   this.store.subscribe(state=>{
     console.log(state);
     this._cartItems=state.cart.items;
     console.log('loaded');});  */
  }


  addItem(product: Product) {

    let itemIndex = this._cartItems.findIndex(i => i.product.id == product.id);
    if (itemIndex >= 0) {
      this._cartItems[itemIndex].quantity += 1;
      this._cartItems[itemIndex].totalPrice = this._cartItems[itemIndex].product.price * this._cartItems[itemIndex].quantity;
    }
    else
      this._cartItems.push({ product: product, quantity: 1, totalPrice: product.price });

      this.cartItems.next(this._cartItems);
  }

  getTotalQuantity$() {
    return this.cartItems.pipe(map((c)=>
     c.reduce((n, { quantity }) => n + quantity, 0))
      );

  }

 
  getTotalPrice() {
    return this._cartItems.reduce((n, { totalPrice }) => n + totalPrice, 0);
  }

  getItems() {
    return this._cartItems;

  }

}
