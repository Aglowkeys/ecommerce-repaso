import { ADD_TO_CART, GET_ALL_PRODUCTS, REMOVE_FROM_CART } from './constants';

const initialState = {
    products: [],
    cart: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
            };
        }

        case ADD_TO_CART: {
            const found = state.cart.find((product) => product.id === action.payload.id);

            if (!found) {
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                };
            }

            return state;
        }

        case REMOVE_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload),
            };
        }

        default:
            return state;
    }
}

export default reducer;
