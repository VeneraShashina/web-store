import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { shoppingCartReducer } from './state/cart.reducer';
import { ShoppingCartComponent } from './shopping-cart.component';
import { CartTotalComponent } from '../cart-total/cart-total.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';

@NgModule({
  declarations: [ShoppingCartComponent, CartTotalComponent],
  imports: [CommonModule, 
    ShoppingCartRoutingModule,
  ],
  exports: [ShoppingCartComponent,CartTotalComponent]
})
export class ShoppingCartModule {}