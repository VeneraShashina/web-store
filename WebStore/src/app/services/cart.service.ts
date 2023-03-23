import { Injectable } from '@angular/core';
import { BehaviorSubject, find, map, pipe, Observable, Observer } from 'rxjs';
import { CartItem } from 'src/app/model/cartItem';
import { CartStatus } from 'src/app/model/cartStatus';
import { Product } from 'src/app/model/product';
import { CartActionTypes } from '../shopping-cart/state/cart.actions';
import { Store , select} from '@ngrx/store';
import * as fromCartState from '../shopping-cart/state/cart.reducer'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems$ =new Observable<CartItem[]>;
  constructor(private store: Store<any>) {
    
    this.store.dispatch({type: CartActionTypes.LOAD_CART});
    this.cartItems$ = this.store.pipe(select(fromCartState.getCartItems$))
  }


  addItem(product: Product) {
    this.store.dispatch({type: CartActionTypes.ADD_CART_ITEM, payload:product});
  }

  removeItem(item: CartItem) {
    this.store.dispatch({type: CartActionTypes.DELETE_CART_ITEM, payload:item});
  }

  getTotalQuantity$() {
    return this.store.pipe(select(fromCartState.getCartTotalQty$))

  }

  getTotalPrice$() {
    return this.store.pipe(select(fromCartState.getCartTotalPrice$))
  }
}
