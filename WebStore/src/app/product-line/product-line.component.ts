import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-product-line',
  templateUrl: './product-line.component.html',
  styleUrls: ['./product-line.component.scss']
})
export class ProductLineComponent {
  @Output() addProductEvent = new EventEmitter<Product>();
  @Input()
  product!: Product;

  addProduct(value: Product) { this.addProductEvent.emit(value); }
}
