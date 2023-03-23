import { Action } from "@ngrx/store";
import { CartItem } from "src/app/model/cartItem";
import { Product } from "src/app/model/product";

export enum CartActionTypes {
    LOAD_CART = "[CartState] Load Cart",
    LOAD_CART_SUCCESS = "[CartState] Load Cart Success",
    LOAD_CART_FAIL = "[CartState] Load Cart Fail",
    ADD_CART_ITEM = "[CartState] Add Cart Item",
    ADD_CART_ITEM_SUCCESS = "[CartState] Add Cart Item Sucess",
    ADD_CART_ITEM_FAIL = "[CartState] Add Cart Item Fail",
    DELETE_CART_ITEM = "[CartState] Delete Cart Item",
    DELETE_CART_ITEM_SUCCESS = "[CartState] Delete Cart Item Success",
    DELETE_CART_ITEM_FAIL = "[CartState] Delete Cart Item Fail",
}

export class LoadCart implements Action {
    readonly type = CartActionTypes.LOAD_CART
}

export class LoadCartSuccess implements Action {
    readonly type = CartActionTypes.LOAD_CART_SUCCESS

    constructor(public payload: CartItem[]) { }
}

export class LoadCartFailed implements Action {
    readonly type = CartActionTypes.LOAD_CART_FAIL

    constructor(public payload: string) { }
}

export class AddCartItem implements Action {
    readonly type = CartActionTypes.ADD_CART_ITEM
    constructor(public payload: Product) { }
}

export class AddCartItemSuccess implements Action {
    readonly type = CartActionTypes.ADD_CART_ITEM_SUCCESS

    constructor(public payload: CartItem[]) { }
}

export class AddCartItemFailed implements Action {
    readonly type = CartActionTypes.ADD_CART_ITEM_FAIL
    constructor(public payload: string) { }
}

export class DeleteCartItem implements Action {
    readonly type = CartActionTypes.DELETE_CART_ITEM
    constructor(public payload: CartItem) { }
}

export class DeleteCartItemSuccess implements Action {
    readonly type = CartActionTypes.DELETE_CART_ITEM_SUCCESS
    constructor(public payload: CartItem[]) { }
}

export class DeleteCartItemFailed implements Action {
    readonly type = CartActionTypes.DELETE_CART_ITEM_FAIL
    constructor(public payload: string) { }
}



export type CartAction = LoadCart | LoadCartSuccess | LoadCartFailed
    | AddCartItem | AddCartItemSuccess | AddCartItemFailed
    | DeleteCartItem | DeleteCartItemSuccess | DeleteCartItemFailed