import useMockData from 'hooks/useData';
import { devSearch } from 'utils/DataRetrievalService';

const useFeaturedBanners = () => {
    const fileName = 'featured-banners.json';
    const mapFunction = ({id, data: { main_image: { url } }}) => { return { id, url } };

    const [productCategories] = useMockData(devSearch, fileName, mapFunction);
    return [productCategories];
};

export default useFeaturedBanners;