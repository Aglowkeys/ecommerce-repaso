import { GET_ALL_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from './constants';

export const getProducts = () => {
    return function (dispatch) {
        fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then((products) => {
                dispatch({ type: GET_ALL_PRODUCTS, payload: products });
            });
    };
};

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    };
};
