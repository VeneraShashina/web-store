import * as fromRoot from "../../state/app-state"
import {
    addCartItem,
    // CartAction, CartActionTypes, 
    deleteCartItem, loadCart
} from "./cart.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store"
import { CartState } from "./cart-state";
import { CartStateHelper } from "src/app/shopping-cart/state/cart-state-helper";
import { createReducer, on, props } from '@ngrx/store';
import { AppState } from "../../state/app-state";
/*export interface AppState extends fromRoot.AppState {
    cart: CartState
}*/

const initialState: CartState= {
    items: [],
    loaded: false,
    error: ""
};


export const shoppingCartReducer = createReducer(
    initialState,
    on(loadCart, (state: CartState) => { return { ...state, loaded: true } }),
    on(addCartItem, (state, actionProps) => {
        return {
            ...state,
            items: CartStateHelper.addItem(state.items, actionProps.payload)
        };
    }),
    on(deleteCartItem, (state, actionProps) => {
        return {
            ...state,
            items: CartStateHelper.deleteItem(state.items, actionProps.payload)
        };
    }
    )
);


const getShoppingCartFeatureState = createFeatureSelector<CartState>("cart")

export const getCartItems$ = createSelector(
    getShoppingCartFeatureState,
    (state: CartState) => state.items
)

export const getCartTotalQty$ = createSelector(
    getShoppingCartFeatureState,
    (state: CartState) => CartStateHelper.getTotalQuantity(state.items)
)
export const getCartTotalPrice$ = createSelector(
    getShoppingCartFeatureState,
    (state: CartState) => CartStateHelper.getTotalPrice(state.items)
)
