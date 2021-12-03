import { useProductListAPIData } from 'utils/hooks/useProductListAPIData';
import ProductListContext from 'state/ProductListContext';
import { useContext } from 'react';

const useProducts = ({pageSize }) => {

    const { productListState } = useContext(ProductListContext);

    let queries = ['at(document.type, "product")'];

    if(productListState.filters.length > 0)
    {
        var filterQuery = `any(my.product.category, [${productListState.filters.map((categoryId) => `"${categoryId}"` ).join(',')}])`;
        queries.push(filterQuery);
    }

    const mapFunction = ({id, data: {name, mainimage: { url }, category: { slug }, price }}) => {
        return { id, url, name, "category": slug, price };
    };

    const [productCategories] = useProductListAPIData({queries, pageSize, mapFunction});
    return [productCategories];
};

export default useProducts;