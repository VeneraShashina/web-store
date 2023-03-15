import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';



const routes: Routes = [
  { path: '', redirectTo: '/productList', pathMatch: 'full' },
  {
    path: 'productList',
    loadChildren: () => import('./product-list/product-list.module').then(
      (m) => m.ProductListModule
    )
  },
  {
    path: 'cart', loadChildren: () => import('./shopping-cart/shopping-cart.module').then(
      (m) => m.ShoppingCartModule
    )
  },
  { path: 'product/:id', component: ProductComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }