import { CartItem } from "./cartItem";
export interface CartState {
  items:CartItem[],
 loading: boolean,
 loaded: boolean
  }