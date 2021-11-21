import React from 'react';
import styled from 'styled-components';

import Slider from 'components/Slider/Slider';
import Carousel from 'components/Carousel/Carousel.style';
import Grid from 'components/Grid/Grid';

import FeaturedBanners from 'mocks/featured-banners.json';
import ProductCategories from 'mocks/product-categories.json';
import FeaturedProducts from 'mocks/featured-products.json';

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
        <Grid data={FeaturedProducts.results} />
    </HomeContainer>
    );
};

export default Home;