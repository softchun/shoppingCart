export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_CART = 'DELETE_CART'
export const REMOVE_ONE = 'REMOVE_ONE'

// const action = {
//   type: '',
//   payload: {
//     id: '',
//     title: '',
//     price: 2,
//     quantity: 1,
//   },
// }

// Action creators
export function addToCart(addedProduct) {
    return {
        type: ADD_TO_CART,
        payload: addedProduct,
    }
}

export function deleteCart(data) {
    return {
        type: DELETE_CART,
        payload: data,
    }
}

export function removeOne(data) {
    return {
        type: REMOVE_ONE,
        payload: data,
    }
}