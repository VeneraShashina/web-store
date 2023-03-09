import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent {

  totalPrice:number=0;
  constructor(private cartService: CartService) {
    cartService.cartStatus().subscribe(c => this.totalPrice =c.totalPrice);
  }
}
