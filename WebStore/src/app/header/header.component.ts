import { Component } from '@angular/core';
import { Store , select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';
import { CartActionTypes } from '../shopping-cart/state/cart.actions';
import * as fromCartState from '../shopping-cart/state/cart.reducer'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  numberOfCartItems$: Observable<number> ;
  constructor(private cartService: CartService)//, private store: Store<fromCartState.AppState>)
   {
   /* let items=this.store.pipe(select(fromCartState.getCartItems$));
    items.subscribe((i)=>console.log(i));*/
   this.numberOfCartItems$=
   //this.store.pipe(select(fromCartState.getCartTotalQty$));//
   cartService.getTotalQuantity$();

  }
}
