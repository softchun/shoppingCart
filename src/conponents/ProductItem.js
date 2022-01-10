import React, { useState } from 'react';
import '../assets/main.css'
import Size from './Size';
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { useNavigate } from 'react-router-dom';

function ProductItem({product}) {
    
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [size, setSize] = useState(product.size&&product.size[0])

    function handleChangeSize(e) {
        setSize(e.target.value)
    }

    function handleAddToCart() {
        dispatch(addToCart({...product, size: size? size: '-', quantity: 1}))
    }

    function handleBuyNow() {
        dispatch(addToCart({...product, size: size? size: '-', quantity: 1}))
        navigate('/cart')
    }

    return (
        <div className="flex font-sans max-w-3xl m-2">
            <div className="flex-none w-56 relative">
                <img src={product.image} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
            </div>
            <form className="flex-auto p-6 bg-white mt-2 mb-2 rounded-r-lg">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto font-medium text-gray-900">
                        {product.title}
                    </h1>
                    <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-indigo-800">
                        $ {product.price}
                    </div>
                    {product.inStock? 
                        <div className="text-sm font-medium text-gray-400">
                            In stock
                        </div> :
                        <div className="text-sm font-medium text-red-400">
                            Sold out
                        </div>
                    }
                </div>
                <div className="flex items-baseline mb-5 border-b border-gray-200">
                    {product.size.length && <div className="space-x-2 flex text-sm font-bold flex-wrap mt-3 pb-3" onChange={handleChangeSize}>
                        {product.size.length && product.size.map(item => 
                            <Size item={item} sizeCheck={size} key={item.concat(product.id)} />
                        )}
                    </div>}
                </div>
                <div className="flex space-x-4 mb-3 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                        <button
                            className={`h-10 px-6 font-semibold rounded-full text-white ${product.inStock? 'bg-indigo-800 hover:bg-indigo-800': 'bg-slate-300'}`}
                            type='button'
                            onClick={handleBuyNow}
                            disabled={product.inStock===false}
                        >
                            Buy now
                        </button>
                        <button
                            className={`h-10 px-6 font-semibold rounded-full border border-gray-200 text-gray-900  ${product.inStock? 'hover:bg-slate-100': 'bg-gray-200'}`}
                            type='button'
                            onClick={handleAddToCart}
                            disabled={product.inStock===false}
                        >
                            Add to bag
                        </button>
                    </div>
                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-indigo-800 bg-indigo-50" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                    </button>
                </div>
                <p className="text-sm text-gray-500">
                    Free shipping
                </p>
            </form>
        </div>
    )
}

export default ProductItem;