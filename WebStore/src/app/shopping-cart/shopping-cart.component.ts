import { Component } from '@angular/core';
import { CartItem } from 'src/model/cartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})


export class ShoppingCartComponent {
  items: CartItem[] = []
  constructor(private cartService: CartService) {
    cartService.cartStatus().subscribe(c => this.items =c.items);
  }
}
