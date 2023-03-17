import { Component } from '@angular/core';
import { Store , select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/model/cartItem';
import { CartService } from '../services/cart.service';
import { CartActionTypes } from './state/cart.actions';
import * as fromCartState from './state/cart.reducer'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})


export class ShoppingCartComponent {

  cartItems$ =new Observable<CartItem[]>;
 // items: CartItem[]=[]// this.cartService.getItems();
  constructor(private cartService: CartService, private store: Store<fromCartState.AppState>) {
  }

  ngOnInit()
  {
    this.store.dispatch({ type: CartActionTypes.LOAD_CART});
   /* this.store.subscribe(state=>{ 
          console.log(state);
          this.items=state.cart.items;
          console.log('loaded');
        }); */

        this.cartItems$ = this.store.pipe(select(fromCartState.getCartItems))
  }

  remove(item: CartItem) {
    this.store.dispatch({ type: CartActionTypes.DELETE_CART_ITEM, payload: item});
    console.log(item);
    }
}
