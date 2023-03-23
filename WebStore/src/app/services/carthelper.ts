import { Injectable } from "@angular/core";
import { CartItem } from "../model/cartItem";
import { Product } from "../model/product";

@Injectable({
    providedIn: 'root'
  })
  export class CartHelper {
  
  
   static addItem(items: CartItem[], product: Product) {
  
    let newItems=[...items];
     let itemIndex = newItems.findIndex(i => i.product.id == product.id);
      if (itemIndex>-1)
      {
        console.log(`item ${product.title} is already in cart qty ${newItems[itemIndex].quantity}, index ${itemIndex}`)
        newItems.splice(itemIndex,1,{ product: product, quantity: newItems[itemIndex].quantity+1, totalPrice: product.price })
      }
      else
      
      newItems.push({ product: product, quantity: 1, totalPrice: product.price });
      console.log(`updated cart ${newItems} `)
       return newItems;
    }

    static deleteItem(items: CartItem[], item: CartItem) {
      let newItems= items.filter(i=>i.product.id != item.product.id);
      return newItems;
      }


    
  
  static  getTotalQuantity(items: CartItem[]) {
      return items.reduce((n, { quantity }) => n + quantity, 0);
  
    }
  
   
   static getTotalPrice(items: CartItem[]) {
      return items.reduce((n, { totalPrice }) => n + totalPrice, 0);
    }
}