import { Component } from '@angular/core';
import { Store , select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/model/cartItem';
import { CartService } from '../services/cart.service';
//import { CartActionTypes } from './state/cart.actions';
import * as fromCartState from './state/cart.reducer'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})


export class ShoppingCartComponent {

  get cartItems$() {return this.cartService.cartItems$;}
  constructor(private cartService: CartService, private store: Store<fromCartState.AppState>) {
  }

  ngOnInit()
  {
    this.cartService.loadCart();
  }

  remove(item: CartItem) {
   this.cartService.removeItem(item)
    
    }
}
