import { CartItem } from "../../model/cartItem";

//import { CartState } from "../../model/cartState";
//import { CartItem } from "./cartItem";
export interface CartState {
    items: CartItem[];
    loaded: boolean;
    error: string;

}
