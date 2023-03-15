import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list.component';
import { ProductLineComponent } from '../product-line/product-line.component';
import { ProductListRoutingModule } from './product-list-routing.module';

@NgModule({
  declarations: [ProductListComponent, ProductLineComponent],
  imports: [CommonModule, ProductListRoutingModule],
  exports: [ProductListComponent, ProductLineComponent],
})
export class ProductListModule {}