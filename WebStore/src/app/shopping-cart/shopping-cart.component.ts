import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItem } from 'src/app/model/cartItem';
import { CartState } from '../model/cartState';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})


export class ShoppingCartComponent {
  items: CartItem[]=[];// = this.cartService.getItems();
  constructor(private cartService: CartService, private store: Store<any>) {

     this.store.dispatch({ type: "LOAD_CART"});
     console.log('dispatched');
    this.store.subscribe(state=>{
      console.log(state);
      this.items=state.cart.items;
      console.log('loaded');});
  }
}
