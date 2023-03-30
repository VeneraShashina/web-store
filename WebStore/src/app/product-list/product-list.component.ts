import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/model/product';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
//import { CartActionTypes } from '../shopping-cart/state/cart.actions';
import * as fromCartState from '../shopping-cart/state/cart.reducer'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products:Product[]=[];

  constructor(private productsService: ProductsService, private cartService: CartService)
  {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }

  addToCart(product:Product)
  {
    this.cartService.addItem(product);
  }

}
