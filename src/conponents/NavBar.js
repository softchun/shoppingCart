import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useSelector } from 'react-redux'

function NavBar() {

    const navigate = useNavigate();

    const cart = useSelector(state => state.cart)

    function handleClickProduct() {
        navigate('/products')
    }

    function handleClick() {
        navigate('/cart')
    }

    return (
        <nav className="md:flex flex-row items-center justify-between px-8 h-18 border-b-2 h-20">
            <button className="text-xl items-start" onClick={handleClickProduct}>Product</button>
            <div className="flex items-center space-x-6">
                <SearchBar />
                <button className="relative" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    {cart.length !== 0 && <div className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full pt-[-10px]">
                        <div className="-mt-[2px] text-[11px] font-bold">
                            {cart.length}
                        </div>
                    </div>}
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default NavBar;