import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { CartState } from "../shopping-cart/state/cart-state";
import * as fromCartState from "../shopping-cart/state/cart.reducer";
import { hydrationMetaReducer } from "./hydration/hydration.reducer";
export interface AppState {
  cart:CartState
}

export const reducers: ActionReducerMap<AppState> = {
    cart: fromCartState.shoppingCartReducer
   }

   export const metaReducers: MetaReducer[] = [
    hydrationMetaReducer
  ]