import useMockData from 'hooks/useData';
import DataRetrievalService from 'utils/DataRetrievalService';
import { ALLOW_MOCKS } from 'utils/constants';

const useProductCategories = () => {
    const fileName = 'product-categories.json';
    const mapFunction = ({id, data: { name, main_image: { url } }}) => { return { id, name, url } };

    const searchFunction = (ALLOW_MOCKS === 'true') ? DataRetrievalService.devSearch : DataRetrievalService.search;

    const [productCategories] = useMockData(searchFunction, fileName, mapFunction);
    return [productCategories];
};

export default useProductCategories;