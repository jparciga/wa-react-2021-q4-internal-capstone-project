import ProductGrid from 'Components/ProductGrid';
import products from 'mocks/en-us/products.json';
import categories from 'mocks/en-us/product-categories.json';
import useProductsWithCategories from 'Utils/Hooks/useProductsWithCategory';
import { useState } from 'react';
import CategorySelector from 'Components/CategorySelector';
import Paginator from 'Components/Paginator';
import { Wrapper, CategorySection, ProductSection } from './Products.styles';
import { productsWithCategory } from 'Utils/Collections/filters';

export default function Products() {
    const fullProducts = useProductsWithCategories(products.results, categories.results);
    const [activeCategories, setActiveCategories] = useState(() => new Set());
    const displayProducts = productsWithCategory(fullProducts, activeCategories);

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
                    <CategorySelector categories={categories} activeCategories={activeCategories} handleChecked={handleChecked} />}
                </CategorySection>
                <ProductSection>
                    <ProductGrid entries={displayProducts} />
                    <Paginator />
                </ProductSection>
            </Wrapper>
        </div>
    );
}