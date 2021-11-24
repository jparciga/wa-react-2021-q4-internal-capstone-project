import useData from 'hooks/useData';

const useFeaturedProducts = () => {
    const fileName = 'featured-banners.json';
    //key={obj.id} url={obj.data.main_image.url}
    const mapFunction = ({id, data: { main_image: { url } }}) => { return { id, url } };

    const [productCategories] = useData(fileName, mapFunction);
    return [productCategories];
};

export default useFeaturedProducts;