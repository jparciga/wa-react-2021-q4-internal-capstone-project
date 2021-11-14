import React from 'react';
import Slider from './Slider';
import Carousel from './Carousel';

import styled from 'styled-components';

import FeaturedBanners from './featured-banners.json';
import ProductCategories from './product-categories.json';

const HomeContainer = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
    justify-items:center;
    gap: 2em;
`;

const Home = () => {
    return (
    <HomeContainer>
        <Slider data={FeaturedBanners}/>
        <Carousel data={ProductCategories}/>
        <div className="featuredProducts">Featured Products</div>
    </HomeContainer>
    );
};

export default Home;