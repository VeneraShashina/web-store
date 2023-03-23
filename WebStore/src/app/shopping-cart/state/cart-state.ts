import { CartItem } from "../../model/cartItem";
export interface CartState {
    items: CartItem[];
    loaded: boolean;
    error: string;

}
