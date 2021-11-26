import useData from 'hooks/useData';
import { devSearch } from 'utils/DataRetrievalService';

const useFeaturedProducts = () => {
    const fileName = 'featured-products.json';
    const mapFunction = ({id, data: {name, mainimage: { url }, category: { slug }, price }}) => {
        return { id, url, name, "category": slug, price };
    };

    const [productCategories] = useData(devSearch, fileName, mapFunction);
    return [productCategories];
};

export default useFeaturedProducts;