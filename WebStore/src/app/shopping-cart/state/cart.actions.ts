import { Action } from "@ngrx/store";
import { CartItem } from "src/app/model/cartItem";
import { Product } from "src/app/model/product";

export enum CartActionTypes {
    LOAD_CART = "[CartState] Load Cart",
    ADD_CART_ITEM = "[CartState] Add Cart Item",
    DELETE_CART_ITEM = "[CartState] Delete Cart Item",
}

export class LoadCart implements Action {
    readonly type = CartActionTypes.LOAD_CART
}

export class AddCartItem implements Action {
    readonly type = CartActionTypes.ADD_CART_ITEM
    constructor(public payload: Product) { }
}


export class DeleteCartItem implements Action {
    readonly type = CartActionTypes.DELETE_CART_ITEM
    constructor(public payload: CartItem) { }
}

export type CartAction = LoadCart | AddCartItem | DeleteCartItem 