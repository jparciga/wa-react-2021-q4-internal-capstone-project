import { useAPIData } from 'utils/hooks/useAPIData';

const useFeaturedProducts = () => {
    const queries = ['at(document.type, "product")', 
                     'at(document.tags, ["Featured"])'];
    const pageSize = 16;
    const mapFunction = ({id, data: {name, mainimage: { url }, category: { slug }, price }}) => {
        return { id, url, name, "category": slug, price };
    };

    const productCategories = useAPIData({queries, pageSize}, mapFunction);
    return productCategories;
};

export default useFeaturedProducts;