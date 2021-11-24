import useData from 'hooks/useData';

const useProducts = () => {
    const fileName = 'products.json';
    const mapFunction = ({id, data: {name, mainimage: { url }, category: { slug }, price }}) => {
        return { id, url, name, "category": slug, price };
    };

    const [productCategories] = useData(fileName, mapFunction);
    return [productCategories];
};

export default useProducts;