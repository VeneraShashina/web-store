import * as fromRoot from "../../state/app-state"
import { CartAction, CartActionTypes } from "./cart.actions";
import {createFeatureSelector, createSelector} from "@ngrx/store"
import { CartState } from "./cart-state";
import { CartStateHelper } from "src/app/shopping-cart/state/cart-state-helper";
  export interface AppState extends fromRoot.AppState {
    cart: CartState
  }

const initialState: CartState = {
    items: [],
    loaded: false,
    error: ""
};

export function shoppingCartReducer(state: CartState = initialState, action: CartAction):CartState {
    switch (action.type) {

        case CartActionTypes.LOAD_CART: {
            return {
                ...state,
                loaded: true,
            };
        }
      
        case CartActionTypes.ADD_CART_ITEM: {
            return {
                ...state,
                items: CartStateHelper.addItem(state.items, action.payload)
            };
        }

        case CartActionTypes.DELETE_CART_ITEM: {
            return {
                ...state,
                items: CartStateHelper.deleteItem(state.items,action.payload)
            };
        }

        default: {
            return state;
        }
    }
}

const getShoppingCartFeatureState = createFeatureSelector<CartState>("global")

export const getCartItems$= createSelector(
    getShoppingCartFeatureState,
    (state:CartState) => state.items
)

export const getCartTotalQty$= createSelector(
    getShoppingCartFeatureState,
    (state:CartState) => CartStateHelper.getTotalQuantity(state.items)
)
    export const getCartTotalPrice$= createSelector(
        getShoppingCartFeatureState,
        (state:CartState) => CartStateHelper.getTotalPrice(state.items)
)
