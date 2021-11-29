import { useAPIData } from 'utils/hooks/useAPIData';

const useProducts = ({page, pageSize}) => {
    const queries = ['at(document.type, "product")'];

    const mapFunction = ({id, data: {name, mainimage: { url }, category: { slug }, price }}) => {
        return { id, url, name, "category": slug, price };
    };

    const [productCategories, pageNumber, setPageNumber] = useAPIData({queries, pageSize, page}, mapFunction);
    return [productCategories, pageNumber, setPageNumber];
};

export default useProducts;