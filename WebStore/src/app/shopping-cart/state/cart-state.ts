import { CartItem } from "../../model/cartItem";

//import { CartState } from "../../model/cartState";
//import { CartItem } from "./cartItem";
export interface CartState {
    items: CartItem[];
    loading: boolean;
    loaded: boolean;
    error: string;

}
