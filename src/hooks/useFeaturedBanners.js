import { useAPIData } from 'utils/hooks/useAPIData';

const useFeaturedBanners = () => {
    const queries = ['at(document.type, "banner")'];
    const pageSize = 5;
    const mapFunction = ({id, data: { main_image: { url } }}) => { return { id, url } };

    const [featuredBanners] = useAPIData({queries, pageSize}, mapFunction);
    return [featuredBanners];
};

export default useFeaturedBanners;