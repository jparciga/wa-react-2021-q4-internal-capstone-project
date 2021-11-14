import React from 'react';
import Slider from './Slider';
import Carousel from './Carousel';
import Grid from './Grid';

import styled from 'styled-components';

import FeaturedBanners from './featured-banners.json';
import ProductCategories from './product-categories.json';
import FeaturedProducts from './featured-products.json';

const HomeContainer = styled.div`
    display: grid;
    justify-items:center;
    gap: 2em;
`;

const Home = () => {
    return (
    <HomeContainer>
        <Slider data={FeaturedBanners}/>
        <Carousel data={ProductCategories}/>
        <div className="carousel"></div>
        <Grid data={FeaturedProducts} />
    </HomeContainer>
    );
};

export default Home;