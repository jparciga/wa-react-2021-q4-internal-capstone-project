import categories from 'mocks/en-us/product-categories.json';
import products from 'mocks/en-us/featured-products.json';
import Products from './Products';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import useProductsWithCategories from '../utils/hooks/useProductsWithCategory';
import { useContext } from 'react';
import { PageContext } from '../utils/context/PageContext';
import Slider from '../widget/Slider';
import CategoryGrid from '../widget/CategoryGrid';
import ProductGrid from '../widget/ProductGrid';
import styled from 'styled-components';

const FeaturedProducts = styled.section`
    box-sizing: border-box;
    padding-bottom: 2em;
`;

const ActionButton = styled.button`
    border: none;
    font-weight: bold;
    color: white;
    background-color: #282c34;
    padding: 0.5em 0.75em;
    cursor: pointer;
`;

export default function Home() {
    const { data: banners, isLoading: bannersLoading } = useFeaturedBanners();
    const { navigate } = useContext(PageContext);
    const productsWithCategory = useProductsWithCategories(products.results, categories.results);
    const sliderEntries = banners?.results ?? [];
    const goToProducts = () => {navigate(() => Products)};
    
    return (
        <div className="home-wrapper">
            { bannersLoading ? null : <Slider entries={sliderEntries} /> }
            <section>
                <h2>Categories</h2>
                <CategoryGrid entries={categories.results} />
            </section>
            <FeaturedProducts>
                <h2>Featured Products</h2>
                <ProductGrid entries={productsWithCategory} />
                <ActionButton onClick={goToProducts} >View all products</ActionButton>
            </FeaturedProducts>
        </div>
    );
}