import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



const routes: Routes = [
  { path: '', redirectTo: '/productList', pathMatch: 'full' },
  { path: 'productList', component: ProductListComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'product/:id', component: ProductComponent }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
