import { ActionReducerMap, State } from "@ngrx/store";
import { CartState } from "../shopping-cart/state/cart-state";
import * as fromCartState from "../shopping-cart/state/cart.reducer";
export interface AppState {
  }

export const reducers: ActionReducerMap<AppState> = {
    global: fromCartState.shoppingCartReducer
   }