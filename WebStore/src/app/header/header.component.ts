import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  numberOfCartItems: number = 0;
  constructor(private cartService: CartService) {
    cartService.itemsCount().subscribe(n => this.numberOfCartItems = n);
  }

}
