import useMockData from 'hooks/useData';
import { devSearch } from 'utils/DataRetrievalService';

const useProducts = () => {
    const fileName = 'products.json';
    const mapFunction = ({id, data: {name, mainimage: { url }, category: { slug }, price }}) => {
        return { id, url, name, "category": slug, price };
    };

    const [productCategories] = useMockData(devSearch, fileName, mapFunction);
    return [productCategories];
};

export default useProducts;