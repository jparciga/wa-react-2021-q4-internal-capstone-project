import useMockData from 'hooks/useData';
import { devSearch } from 'utils/DataRetrievalService';

const useProductCategories = () => {
    const fileName = 'product-categories.json';
    const mapFunction = ({id, data: { name, main_image: { url } }}) => { return { id, name, url } };

    const [productCategories] = useMockData(devSearch, fileName, mapFunction);
    return [productCategories];
};

export default useProductCategories;