import React from 'react';
import StyledSlider from './Slider'

import styled from 'styled-components';

import FeaturedBanners from './featured-banners.json';

const HomeContainer = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
    justify-items:center;
    gap: 2em;
`;

const Home = () => {
    return (
    <HomeContainer>
        <StyledSlider data={FeaturedBanners}/>
        <div className="carousel">Carousel</div>
        <div className="featuredProducts">Featured Products</div>
    </HomeContainer>
    );
};

export default Home;