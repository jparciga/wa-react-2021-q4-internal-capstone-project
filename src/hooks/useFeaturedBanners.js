import useData from 'hooks/useData';

const useFeaturedBanners = () => {
    const fileName = 'featured-banners.json';
    const mapFunction = ({id, data: { main_image: { url } }}) => { return { id, url } };

    const [productCategories] = useData(fileName, mapFunction);
    return [productCategories];
};

export default useFeaturedBanners;