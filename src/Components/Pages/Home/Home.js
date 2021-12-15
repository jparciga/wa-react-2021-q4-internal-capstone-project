import Slider from 'Components/Slider';
import CategoryGrid from 'Components/CategoryGrid';
import ProductGrid from 'Components/ProductGrid';
import { FeaturedProducts, ActionLink } from './Home.styles';
import useCategories from 'Utils/Hooks/useCategories';
import useFeaturedBanners from 'Utils/Hooks/useFeaturedBanners';
import useFeaturedProducts from 'Utils/Hooks/useFeaturedProducts';
import useProductsWithCategory from 'Utils/Hooks/useProductsWithCategory';

export default function Home() {
    const { data: { results: categories = [] }, isLoading: categoriesLoading } = useCategories();
    const { data: { results: banners = [] }, isLoading: bannersLoading } = useFeaturedBanners();
    const { data: { results: products = [] }, isLoading: productsLoading } = useFeaturedProducts();
    const productsWithCategory = useProductsWithCategory(products, categories);
    const sliderEntries = banners.map(({data: { main_image: image, title }}) => { 
        return {
            src: image.url,
            alt: image.alt,
            title: title
        };    
    });

    return (
        <div className="home-wrapper">
            { !bannersLoading && <Slider entries={sliderEntries} /> }
            <section>
                <h2>Categories</h2>
                {!categoriesLoading && <CategoryGrid entries={categories ?? []} />}
            </section>
            <FeaturedProducts>
                <h2>Featured Products</h2>
                {!productsLoading && <ProductGrid entries={productsWithCategory} />}
                <ActionLink to="/products">View all products</ActionLink>
            </FeaturedProducts>
        </div>
    );
}