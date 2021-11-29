import { useAPIData } from 'utils/hooks/useAPIData';

const useProducts = () => {
    const queries = ['at(document.type, "product")'];
    const pageSize = 12;
    const mapFunction = ({id, data: {name, mainimage: { url }, category: { slug }, price }}) => {
        return { id, url, name, "category": slug, price };
    };

    const productCategories = useAPIData({queries, pageSize}, mapFunction);
    return productCategories;

    // const fileName = 'products.json';
    // const mapFunction = ({id, data: {name, mainimage: { url }, category: { slug }, price }}) => {
    //     return { id, url, name, "category": slug, price };
    // };

    // const searchFunction = (ALLOW_MOCKS === 'true') ? DataRetrievalService.devSearch : DataRetrievalService.search;

    // const [productCategories] = useMockData(searchFunction, fileName, mapFunction);
    // return [productCategories];
};

export default useProducts;