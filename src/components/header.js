import React from 'react'
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { IoStorefront } from 'react-icons/io5';


export default function Header() {
    return (
        <nav>
            <div className="logo"><IoStorefront />
                Wize Store
            </div>
                <form action="/" method="get">
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search Products</span>
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search Products"
                        name="s" 
                    />
                    <FaSearch />
                </form>
                <FaShoppingCart />
        </nav>
    )
}
