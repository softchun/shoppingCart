import { ADD_TO_CART, DELETE_CART, REMOVE_ONE } from '../actions/cartActions'

// {
//   id: '',
//   title: '',
//   price: 2,
//   quantity: 1
// }

const initialState = {
    cart: [],
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            let updatedCart
            const foundItem = state.cart.find((item) => item.id === action.payload.id && item.size === action.payload.size)

            if (!foundItem) {
                updatedCart = [...state.cart, action.payload]
            } else {
                updatedCart = state.cart.map((item) => ({
                    ...item,
                    quantity:
                        item.id === foundItem.id && item.size === foundItem.size ? item.quantity + 1 : item.quantity,
                }))
            }

            return {
                ...state,
                cart: updatedCart,
            }

        case DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id || item.size !== action.payload.size),
            }

        case REMOVE_ONE:
            let updatedCart2
            const foundItem2 = state.cart.find((item) => item.id === action.payload.id && item.size === action.payload.size)

            if (!foundItem2) {
                updatedCart2 = [...state.cart]
            } else {
                updatedCart2 = state.cart.map((item) => ({
                    ...item,
                    quantity:
                        item.id === foundItem2.id && item.size === foundItem2.size && item.quantity > 0 ? item.quantity - 1 : item.quantity,
                }))
            }

            return {
                ...state,
                cart: updatedCart2,
            }

        default:
            return state
    }
}