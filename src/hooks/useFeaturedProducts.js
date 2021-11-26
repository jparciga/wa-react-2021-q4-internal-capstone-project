import useData from 'hooks/useData';
import DataRetrievalService from 'utils/DataRetrievalService';
import { ALLOW_MOCKS } from 'utils/constants';

const useFeaturedProducts = () => {
    const fileName = 'featured-products.json';
    const mapFunction = ({id, data: {name, mainimage: { url }, category: { slug }, price }}) => {
        return { id, url, name, "category": slug, price };
    };

    const searchFunction = (ALLOW_MOCKS === 'true') ? DataRetrievalService.devSearch : DataRetrievalService.search;

    const [productCategories] = useData(searchFunction, fileName, mapFunction);
    return [productCategories];
};

export default useFeaturedProducts;