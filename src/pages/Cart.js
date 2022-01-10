import React from 'react';
import CartItem from '../conponents/CartItem';
import { useSelector } from 'react-redux'

function Cart() {

    const cart = useSelector(state => state.cart)

    return (
        <div className="flex flex-col items-center">
            <div className="text-5xl text-center mt-4">My Cart</div>
            <div className="flex flex-col items-center m-2 max-w-5xl w-1/2">
                {cart.length === 0 ? <div className="text-2xl text-center my-8">Cart is empty</div> : cart.map(item => <CartItem item={item} key={item.id + item.size} />)}

            </div>
            <div className="flex justify-end items-center space-x-8 mt-4 mb-8">
                <div className="text-2xl">Total: ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}</div>
                <button className="h-10 px-6 font-semibold rounded-full border bg-white hover:bg-slate-100 border-gray-200 text-gray-900" disabled={cart.length === 0}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;