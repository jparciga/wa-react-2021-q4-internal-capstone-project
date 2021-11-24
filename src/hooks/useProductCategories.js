import useData from 'hooks/useData';

const useProductCategories = () => {
    const fileName = 'product-categories.json';
    const mapFunction = ({id, data: { name, main_image: { url } }}) => { return { id, name, url } };

    const [productCategories] = useData(fileName, mapFunction);
    return [productCategories];
};

export default useProductCategories;