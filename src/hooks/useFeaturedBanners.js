import useMockData from 'hooks/useData';
import DataRetrievalService from 'utils/DataRetrievalService';
import { ALLOW_MOCKS } from 'utils/constants';

const useFeaturedBanners = () => {
    const fileName = 'featured-banners.json';
    const mapFunction = ({id, data: { main_image: { url } }}) => { return { id, url } };

    const searchFunction = (ALLOW_MOCKS === 'true') ? DataRetrievalService.devSearch : DataRetrievalService.search;

    const [productCategories] = useMockData(searchFunction, fileName, mapFunction);
    return [productCategories];
};

export default useFeaturedBanners;