import * as fromRoot from "../../state/app-state"
import { CartAction, CartActionTypes } from "./cart.actions";
import {createFeatureSelector, createSelector} from "@ngrx/store"
import { CartState } from "./cart-state";
  export interface AppState extends fromRoot.AppState {
    cart: CartState
  }

const initialState: CartState = {
    items: [//,
       {
            product: {
                id: 1,
                title: 'test1',
                price: 1,

                description: 'test1',
                category: 'cat',
                image: '',
                rating: { rate: 5, count: 10 }

            },
            quantity: 1,
            totalPrice: 1231
        },
        {
            product: {
                id: 2,
                title: 'test2',
                price: 2,
                description: 'test1',
                category: 'cat',
                image: '',
                rating: { rate: 5, count: 10 }
            },
            quantity: 2,
            totalPrice: 333
        }
    ],
    loading: false,
    loaded: false,
    error: ""
};

export function shoppingCartReducer(state: CartState = initialState, action: CartAction):CartState {
    switch (action.type) {

        case CartActionTypes.LOAD_CART: {
            return {
                ...state,
                loading: true,
            };
        }
        case CartActionTypes.LOAD_CART_SUCCESS:{
            return {
                ...state,
                loading: false,
                loaded: true,
                items: action.payload
            }; 
        }

        case CartActionTypes.LOAD_CART_FAIL:{
            return {
                ...state,
                loading: false,
                loaded: false,
                items: [],
                error: action.payload
            }; 
        }
        case CartActionTypes.ADD_CART_ITEM: {
            return {
                ...state,
                items:state.items.concat([{product: action.payload, quantity:1, totalPrice:action.payload.price}])
            };
        }
        case CartActionTypes.ADD_CART_ITEM_SUCCESS:{
            return {
                ...state,
                items: action.payload
            }; 
        }

        case CartActionTypes.ADD_CART_ITEM_FAIL:{
            return {
                ...state,
                error: action.payload
            }; 
        }

        case CartActionTypes.DELETE_CART_ITEM: {
            return {
                ...state,
                items: state.items.filter(i=>i.product.id != action.payload.id)
            };
        }
        case CartActionTypes.DELETE_CART_ITEM_SUCCESS: {
            return {
                ...state,
            };
        }

        default: {
            return state;
        }
    }
}

const getShoppingCartFeatureState = createFeatureSelector<CartState>("global")

export const getCartItems= createSelector(
    getShoppingCartFeatureState,
    (state:CartState) => state.items
)

export const getCartTotalQty= createSelector(
    getShoppingCartFeatureState,
    (state:CartState) => state.items.reduce((n, { quantity }) => n + quantity, 0)
)
