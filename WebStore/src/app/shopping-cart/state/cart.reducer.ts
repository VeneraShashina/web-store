import { CartItem } from "../../model/cartItem";
import { CartState } from "../../model/cartState";

const initialState: CartState = {
    items: [
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
    loaded: false
};

export function shoppingCartReducer(state: CartState = initialState, action: any):CartState {
    switch (action.type) {

        case "LOAD_CART": {
            return {
                ...state,
                loading: true,
                loaded: false

            };
        }
        default: {
            return state;
        }

    }
}