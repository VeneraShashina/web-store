import { Injectable } from '@angular/core';
import { BehaviorSubject, find, map, pipe, Observable, Observer } from 'rxjs';
import { CartItem } from 'src/app/model/cartItem';
import { Product } from 'src/app/model/product';
import { addCartItem,  deleteCartItem, loadCart } from '../shopping-cart/state/cart.actions';
import { Store , select} from '@ngrx/store';
import * as fromCartState from '../shopping-cart/state/cart.reducer'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems$ =new Observable<CartItem[]>;
  constructor(private store: Store<any>) {
    this.cartItems$ = this.store.pipe(select(fromCartState.getCartItems$))
  }

  loadCart()
  {
    this.store.dispatch(loadCart());
  }

  addItem(product: Product) {
    this.store.dispatch(addCartItem({payload:product}));
  }

  removeItem(item: CartItem) {
    this.store.dispatch(deleteCartItem({payload:item}));
  }

  getTotalQuantity$() {
    return this.store.pipe(select(fromCartState.getCartTotalQty$))
  }

  getTotalPrice$() {
    return this.store.pipe(select(fromCartState.getCartTotalPrice$))
  }
}
