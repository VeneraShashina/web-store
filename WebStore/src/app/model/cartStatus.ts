import { CartItem } from "./cartItem";
export interface CartStatus {
  items:CartItem[],
  totalQuantity: number,
  totalPrice:number
  }