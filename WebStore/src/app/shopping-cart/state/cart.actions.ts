import {  props } from "@ngrx/store";
import { CartItem } from "src/app/model/cartItem";
import { Product } from "src/app/model/product";
import { createAction } from "@ngrx/store";

export const loadCart = createAction('[CartState] Load Cart');
export const addCartItem = createAction('[CartState] Add Cart Item', props<{payload:Product}>());
export const deleteCartItem = createAction('[CartState] Delete Cart Item', props<{payload:CartItem}>());


