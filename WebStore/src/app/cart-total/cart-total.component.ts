import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent {

  get totalPrice$() {return this.cartService.getTotalPrice$();}
  constructor(private cartService: CartService) {
  }
}
