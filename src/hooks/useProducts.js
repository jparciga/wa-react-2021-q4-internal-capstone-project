import { useProductListAPIData } from 'utils/hooks/useProductListAPIData';
import { useSelector } from "react-redux";

const useProducts = ({pageSize }) => {
    
    const filters = useSelector(({productList: { filters } }) => filters);
    let queries = ['at(document.type, "product")'];

    if(filters.length > 0)
    {
        var filterQuery = `any(my.product.category, [${filters.map((categoryId) => `"${categoryId}"` ).join(',')}])`;
        queries.push(filterQuery);
    }

    const mapFunction = ({id, data: {name, mainimage: { url }, category: { slug }, price, stock }}) => {
        return { id, url, name, "category": slug, price, stock };
    };

    const [productCategories] = useProductListAPIData({queries, pageSize, mapFunction});
    return [productCategories];
};

export default useProducts;