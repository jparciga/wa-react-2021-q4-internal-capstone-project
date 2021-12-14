import ProductGrid from 'Components/ProductGrid';
import useProductsWithCategory from 'Utils/Hooks/useProductsWithCategory';
import { useState } from 'react';
import CategorySelector from 'Components/CategorySelector';
import Paginator from 'Components/Paginator';
import { Wrapper, CategorySection, ProductSection } from './Products.styles';
import { productsHavingCategory } from 'Utils/Collections/filters';
import { useSearchParams } from 'react-router-dom';
import useCategories from 'Utils/Hooks/useCategories';
import useProducts from 'Utils/Hooks/useProducts';

export default function Products() {
    const [params] = useSearchParams();
    const queryCategories = params.getAll('category');
    const { data: { results: categories = [] } } = useCategories();
    const [{ data: { page, total_pages: pages, results: products = [] } }, setPage] = useProducts();
    const fullProducts = useProductsWithCategory(products, categories);
    const [activeCategories, setActiveCategories] = useState(() => new Set(queryCategories));
    const displayProducts = productsHavingCategory(fullProducts, activeCategories);
    const clearFilters = () => {
        setActiveCategories(new Set([]));
    };
    const changePage = (page) => setPage(page);

    const handleChecked = ({target: {checked, value}}) => {
        if (checked) {
            activeCategories.add(value);
        } else {
            activeCategories.delete(value);
        }
        setActiveCategories(new Set(activeCategories));
    };

    return (
        <div>        
            <h2>All Products</h2>
            <Wrapper>
                <CategorySection>
                    <h3>Categories</h3>
                    {categories &&
                    <CategorySelector categories={categories} activeCategories={activeCategories} handleChecked={handleChecked} clearFilters={clearFilters} />}
                </CategorySection>
                <ProductSection>
                    <ProductGrid entries={displayProducts} />
                    <br/>
                    <Paginator onPageChanged={changePage} current={page} pages={pages} />
                </ProductSection>
            </Wrapper>
        </div>
    );
}