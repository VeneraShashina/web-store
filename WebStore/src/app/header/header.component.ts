import { Component } from '@angular/core';
import { Store , select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  numberOfCartItems$: Observable<number> ;
  constructor(private cartService: CartService)
   {
   this.numberOfCartItems$=
   cartService.getTotalQuantity$();

  }
}
