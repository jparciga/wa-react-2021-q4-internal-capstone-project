import categories from 'mocks/en-us/product-categories.json';
import products from 'mocks/en-us/featured-products.json';
import Products from '../Products';
import { useFeaturedBanners } from 'Utils/Hooks/useFeaturedBanners';
import useProductsWithCategories from 'Utils/Hooks/useProductsWithCategory';
import { useContext } from 'react';
import PageContext from 'Utils/Context/PageContext';
import Slider from 'Components/Slider';
import CategoryGrid from 'Components/CategoryGrid';
import ProductGrid from 'Components/ProductGrid';
import { FeaturedProducts, ActionButton } from './Home.styles';

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