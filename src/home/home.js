import React from 'react';
import Carousel from "./carousel/carousel"
import ListCategories from './categories/categories'
import ListProducts from './products/products'

function Home() {
    return (
        <div className='Home'>
            <Carousel/>

            <ListCategories/>

            <ListProducts/>
        </div>
    )
}

export default Home;