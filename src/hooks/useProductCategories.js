import { useAPIData } from 'utils/hooks/useAPIData';

const useProductCategories = () => {
    const queries = ['at(document.type, "category")'];
    const pageSize = 30;
    const mapFunction = ({id, data: { name, main_image: { url } }}) => { 
        return { id, name, url }; 
    };

    const productCategories = useAPIData({queries, pageSize}, mapFunction);
    return productCategories;
};

export default useProductCategories;