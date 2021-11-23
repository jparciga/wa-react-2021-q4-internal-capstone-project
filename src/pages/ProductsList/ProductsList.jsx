import Products from '../../components/Products';
import productsData from '../../mocks/en-us/products.json';
import Sidebar from '../../components/Sidebar';
import { useCallback, useState } from 'react';

const ProductsList = () => {
    const [products, setProducts] = useState(productsData.results);

    const filterProducts = useCallback((selectedCategories) => {
        const result = productsData.results.filter(product => selectedCategories.includes(product.data.category.slug));
        setProducts(result);
    }, []);

    return (
        <>
            <Sidebar filterProducts={filterProducts} />
            <Products 
                items={products} 
                title="Search your Dreams... I mean your Furnitures"
            />
        </>
    );
};

export default ProductsList;