import React from 'react';
import styled from 'styled-components';

import Slider from 'components/Slider/Slider';
import Carousel from 'components/Carousel/Carousel.style';
import Grid from 'components/Grid/Grid.styles';

import useProductCategories from 'hooks/useProductCategories';
import useFeatured from 'hooks/useFeatured';

const HomeContainer = styled.div`
    display: grid;
    justify-items:center;
    gap: 2em;
`;

const Home = () => {
    const [featuredProducts, featuredBanners] = useFeatured();
    const [productCategories] = useProductCategories();

    return (
    <HomeContainer>
        <Slider data={featuredBanners}/>
        <Carousel data={productCategories}/>
        <Grid data={featuredProducts} />
    </HomeContainer>
    );
};

export default Home;