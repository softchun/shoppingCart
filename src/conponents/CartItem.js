import React from 'react';
import { useDispatch } from 'react-redux'
import { addToCart, deleteCart, removeOne } from '../actions/cartActions'

function CartItem({ item }) {

    const dispatch = useDispatch()

    function handleDelete() {
        dispatch(deleteCart({ id: item.id, size: item.size }))
    }

    function handleRemoveOne() {
        dispatch(removeOne({ id: item.id, size: item.size }))
    }

    function handleAddOne() {
        dispatch(addToCart({ ...item, quantity: 1 }))
    }

    return (
        <div className="flex font-sans max-w-5xl min-w-full items-center m-2 space-x-4">
            <div className="flex-none w-20 h-20 relative">
                <img src={item.image} alt='' className="absolute inset-0 w-full h-full object-cover rounded-md"/>
            </div>
            <div className="flex flex-col basis-5/12">
                <div className="font-bold">Title</div>
                <div className="text-slate-300">{item.title}</div>
            </div>
            <div className="flex flex-col text-center basis-1/12">
                <div className="font-bold">Size</div>
                <div className="text-slate-300">{item.size}</div>
            </div>
            <div className="flex flex-col text-center basis-2/12">
                <div className="font-bold">Quantity</div>
                <div className="flex space-x-2 justify-center">
                    <button onClick={handleRemoveOne} disabled={item.quantity===1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    </button>
                    <div className="text-slate-300">{item.quantity}</div>
                    <button onClick={handleAddOne}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-col text-center basis-2/12">
                <div className="font-bold">Price</div>
                <div className="text-slate-300">${item.price}</div>
            </div>
            <div className="flex flex-col text-center basis-2/12">
                <button
                    onClick={handleDelete}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
            </div>
        </div>
    )
}

export default CartItem;