import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import Slider from '../widget/Slider';
import CategoryGrid from '../widget/CategoryGrid';
import ProductGrid from '../widget/ProductGrid';
import categories from 'mocks/en-us/product-categories.json';
import products from 'mocks/en-us/featured-products.json';

const productsWithCategory = function () {
    const categoryDictionary = new Map();
    categories.results.map(({id, data: {name}})=> categoryDictionary.set(id, name));

    return products.results.map((product) => { return { department: categoryDictionary.get(product.data.category.id), ...product }; });
}();

export default function Home() {
    const { data: banners, isLoading: bannersLoading } = useFeaturedBanners();
    
    return (
        <div className="home-wrapper">
            { bannersLoading ? null : <Slider entries={banners?.results ?? []} /> }
            <h2>Categories</h2>
            <CategoryGrid entries={categories.results} />
            <h2>Featured Products</h2>
            <ProductGrid entries={productsWithCategory} />
        </div>
    );
}