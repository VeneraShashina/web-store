import { Action, props } from "@ngrx/store";
import { CartItem } from "src/app/model/cartItem";
import { Product } from "src/app/model/product";
import { createAction } from "@ngrx/store";

export const loadCart = createAction('[CartState] Load Cart');
export const addCartItem = createAction('[CartState] Add Cart Item', props<{payload:Product}>());
export const deleteCartItem = createAction('[CartState] Delete Cart Item', props<{payload:CartItem}>());

/*
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

export type CartAction = LoadCart | AddCartItem | DeleteCartItem */

